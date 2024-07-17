import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserPrivateInfoResolverBase } from "./base/userPrivateInfo.resolver.base";
import { UserPrivateInfo } from "./base/UserPrivateInfo";
import { UserPrivateInfoService } from "./userPrivateInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserPrivateInfo)
export class UserPrivateInfoResolver extends UserPrivateInfoResolverBase {
  constructor(
    protected readonly service: UserPrivateInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
