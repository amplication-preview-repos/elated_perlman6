import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductsCategoryResolverBase } from "./base/productsCategory.resolver.base";
import { ProductsCategory } from "./base/ProductsCategory";
import { ProductsCategoryService } from "./productsCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductsCategory)
export class ProductsCategoryResolver extends ProductsCategoryResolverBase {
  constructor(
    protected readonly service: ProductsCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
