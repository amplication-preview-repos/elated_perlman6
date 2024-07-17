import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TransactionsHonorGloryResolverBase } from "./base/transactionsHonorGlory.resolver.base";
import { TransactionsHonorGlory } from "./base/TransactionsHonorGlory";
import { TransactionsHonorGloryService } from "./transactionsHonorGlory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TransactionsHonorGlory)
export class TransactionsHonorGloryResolver extends TransactionsHonorGloryResolverBase {
  constructor(
    protected readonly service: TransactionsHonorGloryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
