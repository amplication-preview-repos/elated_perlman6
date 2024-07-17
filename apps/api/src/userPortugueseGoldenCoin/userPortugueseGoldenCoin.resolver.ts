import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserPortugueseGoldenCoinResolverBase } from "./base/userPortugueseGoldenCoin.resolver.base";
import { UserPortugueseGoldenCoin } from "./base/UserPortugueseGoldenCoin";
import { UserPortugueseGoldenCoinService } from "./userPortugueseGoldenCoin.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserPortugueseGoldenCoin)
export class UserPortugueseGoldenCoinResolver extends UserPortugueseGoldenCoinResolverBase {
  constructor(
    protected readonly service: UserPortugueseGoldenCoinService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
