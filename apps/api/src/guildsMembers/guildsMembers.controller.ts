import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuildsMembersService } from "./guildsMembers.service";
import { GuildsMembersControllerBase } from "./base/guildsMembers.controller.base";

@swagger.ApiTags("guildsMembers")
@common.Controller("guildsMembers")
export class GuildsMembersController extends GuildsMembersControllerBase {
  constructor(
    protected readonly service: GuildsMembersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
