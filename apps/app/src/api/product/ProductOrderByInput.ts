import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  isActive?: SortOrder;
  stock?: SortOrder;
  createdBy?: SortOrder;
  name?: SortOrder;
  category?: SortOrder;
};
