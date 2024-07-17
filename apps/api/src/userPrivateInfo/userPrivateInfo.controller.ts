import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserPrivateInfoService } from "./userPrivateInfo.service";
import { UserPrivateInfoControllerBase } from "./base/userPrivateInfo.controller.base";

@swagger.ApiTags("userPrivateInfos")
@common.Controller("userPrivateInfos")
export class UserPrivateInfoController extends UserPrivateInfoControllerBase {
  constructor(
    protected readonly service: UserPrivateInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
