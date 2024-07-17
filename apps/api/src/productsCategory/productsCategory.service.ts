import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductsCategoryServiceBase } from "./base/productsCategory.service.base";

@Injectable()
export class ProductsCategoryService extends ProductsCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
