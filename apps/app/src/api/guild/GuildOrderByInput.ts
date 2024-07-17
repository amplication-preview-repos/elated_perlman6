import { SortOrder } from "../../util/SortOrder";

export type GuildOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  slug?: SortOrder;
  missionsItemsId?: SortOrder;
};
