/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ProductsCategory as PrismaProductsCategory,
} from "@prisma/client";

export class ProductsCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductsCategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productsCategory.count(args);
  }

  async productsCategories(
    args: Prisma.ProductsCategoryFindManyArgs
  ): Promise<PrismaProductsCategory[]> {
    return this.prisma.productsCategory.findMany(args);
  }
  async productsCategory(
    args: Prisma.ProductsCategoryFindUniqueArgs
  ): Promise<PrismaProductsCategory | null> {
    return this.prisma.productsCategory.findUnique(args);
  }
  async createProductsCategory(
    args: Prisma.ProductsCategoryCreateArgs
  ): Promise<PrismaProductsCategory> {
    return this.prisma.productsCategory.create(args);
  }
  async updateProductsCategory(
    args: Prisma.ProductsCategoryUpdateArgs
  ): Promise<PrismaProductsCategory> {
    return this.prisma.productsCategory.update(args);
  }
  async deleteProductsCategory(
    args: Prisma.ProductsCategoryDeleteArgs
  ): Promise<PrismaProductsCategory> {
    return this.prisma.productsCategory.delete(args);
  }
}