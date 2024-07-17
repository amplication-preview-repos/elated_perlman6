import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MissionsService } from "./missions.service";
import { MissionsControllerBase } from "./base/missions.controller.base";

@swagger.ApiTags("missions")
@common.Controller("missions")
export class MissionsController extends MissionsControllerBase {
  constructor(
    protected readonly service: MissionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
