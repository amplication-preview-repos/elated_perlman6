import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserGodsonResolverBase } from "./base/userGodson.resolver.base";
import { UserGodson } from "./base/UserGodson";
import { UserGodsonService } from "./userGodson.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserGodson)
export class UserGodsonResolver extends UserGodsonResolverBase {
  constructor(
    protected readonly service: UserGodsonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
