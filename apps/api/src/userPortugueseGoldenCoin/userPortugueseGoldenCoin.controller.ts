import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserPortugueseGoldenCoinService } from "./userPortugueseGoldenCoin.service";
import { UserPortugueseGoldenCoinControllerBase } from "./base/userPortugueseGoldenCoin.controller.base";

@swagger.ApiTags("userPortugueseGoldenCoins")
@common.Controller("userPortugueseGoldenCoins")
export class UserPortugueseGoldenCoinController extends UserPortugueseGoldenCoinControllerBase {
  constructor(
    protected readonly service: UserPortugueseGoldenCoinService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
