import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GuildsCoinsResolverBase } from "./base/guildsCoins.resolver.base";
import { GuildsCoins } from "./base/GuildsCoins";
import { GuildsCoinsService } from "./guildsCoins.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GuildsCoins)
export class GuildsCoinsResolver extends GuildsCoinsResolverBase {
  constructor(
    protected readonly service: GuildsCoinsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
