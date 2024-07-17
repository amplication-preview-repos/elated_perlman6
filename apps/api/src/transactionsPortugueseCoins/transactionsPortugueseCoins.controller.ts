import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionsPortugueseCoinsService } from "./transactionsPortugueseCoins.service";
import { TransactionsPortugueseCoinsControllerBase } from "./base/transactionsPortugueseCoins.controller.base";

@swagger.ApiTags("transactionsPortugueseCoins")
@common.Controller("transactionsPortugueseCoins")
export class TransactionsPortugueseCoinsController extends TransactionsPortugueseCoinsControllerBase {
  constructor(
    protected readonly service: TransactionsPortugueseCoinsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
