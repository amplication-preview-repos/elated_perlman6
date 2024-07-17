import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserHonorGloryService } from "./userHonorGlory.service";
import { UserHonorGloryControllerBase } from "./base/userHonorGlory.controller.base";

@swagger.ApiTags("userHonorGlories")
@common.Controller("userHonorGlories")
export class UserHonorGloryController extends UserHonorGloryControllerBase {
  constructor(
    protected readonly service: UserHonorGloryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
