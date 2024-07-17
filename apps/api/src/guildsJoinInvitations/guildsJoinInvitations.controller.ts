import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuildsJoinInvitationsService } from "./guildsJoinInvitations.service";
import { GuildsJoinInvitationsControllerBase } from "./base/guildsJoinInvitations.controller.base";

@swagger.ApiTags("guildsJoinInvitations")
@common.Controller("guildsJoinInvitations")
export class GuildsJoinInvitationsController extends GuildsJoinInvitationsControllerBase {
  constructor(
    protected readonly service: GuildsJoinInvitationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
