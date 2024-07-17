import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GuildsJoinInvitationsResolverBase } from "./base/guildsJoinInvitations.resolver.base";
import { GuildsJoinInvitations } from "./base/GuildsJoinInvitations";
import { GuildsJoinInvitationsService } from "./guildsJoinInvitations.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GuildsJoinInvitations)
export class GuildsJoinInvitationsResolver extends GuildsJoinInvitationsResolverBase {
  constructor(
    protected readonly service: GuildsJoinInvitationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
