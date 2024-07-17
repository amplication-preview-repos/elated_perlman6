import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserInvitationsService } from "./userInvitations.service";
import { UserInvitationsControllerBase } from "./base/userInvitations.controller.base";

@swagger.ApiTags("userInvitations")
@common.Controller("userInvitations")
export class UserInvitationsController extends UserInvitationsControllerBase {
  constructor(
    protected readonly service: UserInvitationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
