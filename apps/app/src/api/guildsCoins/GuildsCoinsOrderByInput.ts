import { SortOrder } from "../../util/SortOrder";

export type GuildsCoinsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  coins?: SortOrder;
  guildId?: SortOrder;
};
