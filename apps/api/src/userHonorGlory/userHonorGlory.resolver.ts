import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserHonorGloryResolverBase } from "./base/userHonorGlory.resolver.base";
import { UserHonorGlory } from "./base/UserHonorGlory";
import { UserHonorGloryService } from "./userHonorGlory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserHonorGlory)
export class UserHonorGloryResolver extends UserHonorGloryResolverBase {
  constructor(
    protected readonly service: UserHonorGloryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
