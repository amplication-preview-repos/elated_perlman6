import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductsCategoryModuleBase } from "./base/productsCategory.module.base";
import { ProductsCategoryService } from "./productsCategory.service";
import { ProductsCategoryController } from "./productsCategory.controller";
import { ProductsCategoryResolver } from "./productsCategory.resolver";

@Module({
  imports: [ProductsCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductsCategoryController],
  providers: [ProductsCategoryService, ProductsCategoryResolver],
  exports: [ProductsCategoryService],
})
export class ProductsCategoryModule {}
