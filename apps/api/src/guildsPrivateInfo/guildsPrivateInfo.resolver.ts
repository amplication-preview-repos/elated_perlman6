import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GuildsPrivateInfoResolverBase } from "./base/guildsPrivateInfo.resolver.base";
import { GuildsPrivateInfo } from "./base/GuildsPrivateInfo";
import { GuildsPrivateInfoService } from "./guildsPrivateInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GuildsPrivateInfo)
export class GuildsPrivateInfoResolver extends GuildsPrivateInfoResolverBase {
  constructor(
    protected readonly service: GuildsPrivateInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
