import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { UserInvitationsController } from "../userInvitations.controller";
import { UserInvitationsService } from "../userInvitations.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invitationCode: "exampleInvitationCode",
  invitationDate: new Date(),
  expirationDate: new Date(),
  invitedBy: "exampleInvitedBy",
  invitedUser: "exampleInvitedUser",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invitationCode: "exampleInvitationCode",
  invitationDate: new Date(),
  expirationDate: new Date(),
  invitedBy: "exampleInvitedBy",
  invitedUser: "exampleInvitedUser",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    invitationCode: "exampleInvitationCode",
    invitationDate: new Date(),
    expirationDate: new Date(),
    invitedBy: "exampleInvitedBy",
    invitedUser: "exampleInvitedUser",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invitationCode: "exampleInvitationCode",
  invitationDate: new Date(),
  expirationDate: new Date(),
  invitedBy: "exampleInvitedBy",
  invitedUser: "exampleInvitedUser",
};

const service = {
  createUserInvitations() {
    return CREATE_RESULT;
  },
  userInvitationsItems: () => FIND_MANY_RESULT,
  userInvitations: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("UserInvitations", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserInvitationsService,
          useValue: service,
        },
      ],
      controllers: [UserInvitationsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /userInvitations", async () => {
    await request(app.getHttpServer())
      .post("/userInvitations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        invitationDate: CREATE_RESULT.invitationDate.toISOString(),
        expirationDate: CREATE_RESULT.expirationDate.toISOString(),
      });
  });

  test("GET /userInvitations", async () => {
    await request(app.getHttpServer())
      .get("/userInvitations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          invitationDate: FIND_MANY_RESULT[0].invitationDate.toISOString(),
          expirationDate: FIND_MANY_RESULT[0].expirationDate.toISOString(),
        },
      ]);
  });

  test("GET /userInvitations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userInvitations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userInvitations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userInvitations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        invitationDate: FIND_ONE_RESULT.invitationDate.toISOString(),
        expirationDate: FIND_ONE_RESULT.expirationDate.toISOString(),
      });
  });

  test("POST /userInvitations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/userInvitations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        invitationDate: CREATE_RESULT.invitationDate.toISOString(),
        expirationDate: CREATE_RESULT.expirationDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/userInvitations")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
