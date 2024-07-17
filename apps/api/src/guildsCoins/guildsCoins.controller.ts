import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GuildsCoinsService } from "./guildsCoins.service";
import { GuildsCoinsControllerBase } from "./base/guildsCoins.controller.base";

@swagger.ApiTags("guildsCoins")
@common.Controller("guildsCoins")
export class GuildsCoinsController extends GuildsCoinsControllerBase {
  constructor(
    protected readonly service: GuildsCoinsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
