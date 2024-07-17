import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuildsPrivateInfoService } from "./guildsPrivateInfo.service";
import { GuildsPrivateInfoControllerBase } from "./base/guildsPrivateInfo.controller.base";

@swagger.ApiTags("guildsPrivateInfos")
@common.Controller("guildsPrivateInfos")
export class GuildsPrivateInfoController extends GuildsPrivateInfoControllerBase {
  constructor(
    protected readonly service: GuildsPrivateInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
