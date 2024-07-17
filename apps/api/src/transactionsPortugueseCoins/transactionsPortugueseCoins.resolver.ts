import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TransactionsPortugueseCoinsResolverBase } from "./base/transactionsPortugueseCoins.resolver.base";
import { TransactionsPortugueseCoins } from "./base/TransactionsPortugueseCoins";
import { TransactionsPortugueseCoinsService } from "./transactionsPortugueseCoins.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TransactionsPortugueseCoins)
export class TransactionsPortugueseCoinsResolver extends TransactionsPortugueseCoinsResolverBase {
  constructor(
    protected readonly service: TransactionsPortugueseCoinsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
