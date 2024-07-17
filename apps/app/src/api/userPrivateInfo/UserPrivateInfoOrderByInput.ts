import { SortOrder } from "../../util/SortOrder";

export type UserPrivateInfoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  birthDate?: SortOrder;
  country?: SortOrder;
  city?: SortOrder;
  cc?: SortOrder;
  userId?: SortOrder;
};
