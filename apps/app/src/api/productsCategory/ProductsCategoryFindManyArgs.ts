import { ProductsCategoryWhereInput } from "./ProductsCategoryWhereInput";
import { ProductsCategoryOrderByInput } from "./ProductsCategoryOrderByInput";

export type ProductsCategoryFindManyArgs = {
  where?: ProductsCategoryWhereInput;
  orderBy?: Array<ProductsCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
