import { ProductsCategory as TProductsCategory } from "../api/productsCategory/ProductsCategory";

export const PRODUCTSCATEGORY_TITLE_FIELD = "name";

export const ProductsCategoryTitle = (record: TProductsCategory): string => {
  return record.name?.toString() || String(record.id);
};
