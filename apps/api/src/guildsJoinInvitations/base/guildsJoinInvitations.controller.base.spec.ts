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
import { GuildsJoinInvitationsController } from "../guildsJoinInvitations.controller";
import { GuildsJoinInvitationsService } from "../guildsJoinInvitations.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  sentAt: new Date(),
  responseAt: new Date(),
  inviterUserId: "exampleInviterUserId",
  inviteeUserEmail: "exampleInviteeUserEmail",
  inviteeUserId: "exampleInviteeUserId",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  sentAt: new Date(),
  responseAt: new Date(),
  inviterUserId: "exampleInviterUserId",
  inviteeUserEmail: "exampleInviteeUserEmail",
  inviteeUserId: "exampleInviteeUserId",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    sentAt: new Date(),
    responseAt: new Date(),
    inviterUserId: "exampleInviterUserId",
    inviteeUserEmail: "exampleInviteeUserEmail",
    inviteeUserId: "exampleInviteeUserId",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  sentAt: new Date(),
  responseAt: new Date(),
  inviterUserId: "exampleInviterUserId",
  inviteeUserEmail: "exampleInviteeUserEmail",
  inviteeUserId: "exampleInviteeUserId",
};

const service = {
  createGuildsJoinInvitations() {
    return CREATE_RESULT;
  },
  guildsJoinInvitationsItems: () => FIND_MANY_RESULT,
  guildsJoinInvitations: ({ where }: { where: { id: string } }) => {
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

describe("GuildsJoinInvitations", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GuildsJoinInvitationsService,
          useValue: service,
        },
      ],
      controllers: [GuildsJoinInvitationsController],
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

  test("POST /guildsJoinInvitations", async () => {
    await request(app.getHttpServer())
      .post("/guildsJoinInvitations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        sentAt: CREATE_RESULT.sentAt.toISOString(),
        responseAt: CREATE_RESULT.responseAt.toISOString(),
      });
  });

  test("GET /guildsJoinInvitations", async () => {
    await request(app.getHttpServer())
      .get("/guildsJoinInvitations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          sentAt: FIND_MANY_RESULT[0].sentAt.toISOString(),
          responseAt: FIND_MANY_RESULT[0].responseAt.toISOString(),
        },
      ]);
  });

  test("GET /guildsJoinInvitations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/guildsJoinInvitations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /guildsJoinInvitations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/guildsJoinInvitations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        sentAt: FIND_ONE_RESULT.sentAt.toISOString(),
        responseAt: FIND_ONE_RESULT.responseAt.toISOString(),
      });
  });

  test("POST /guildsJoinInvitations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/guildsJoinInvitations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        sentAt: CREATE_RESULT.sentAt.toISOString(),
        responseAt: CREATE_RESULT.responseAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/guildsJoinInvitations")
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
