import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserInvitationsResolverBase } from "./base/userInvitations.resolver.base";
import { UserInvitations } from "./base/UserInvitations";
import { UserInvitationsService } from "./userInvitations.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserInvitations)
export class UserInvitationsResolver extends UserInvitationsResolverBase {
  constructor(
    protected readonly service: UserInvitationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
