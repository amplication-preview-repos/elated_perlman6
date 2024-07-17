import { SortOrder } from "../../util/SortOrder";

export type UserGodsonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  relationshipDate?: SortOrder;
  godfather?: SortOrder;
  godson?: SortOrder;
};
