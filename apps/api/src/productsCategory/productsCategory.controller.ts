import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductsCategoryService } from "./productsCategory.service";
import { ProductsCategoryControllerBase } from "./base/productsCategory.controller.base";

@swagger.ApiTags("productsCategories")
@common.Controller("productsCategories")
export class ProductsCategoryController extends ProductsCategoryControllerBase {
  constructor(
    protected readonly service: ProductsCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
