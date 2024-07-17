import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserOnboardingResolverBase } from "./base/userOnboarding.resolver.base";
import { UserOnboarding } from "./base/UserOnboarding";
import { UserOnboardingService } from "./userOnboarding.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserOnboarding)
export class UserOnboardingResolver extends UserOnboardingResolverBase {
  constructor(
    protected readonly service: UserOnboardingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
