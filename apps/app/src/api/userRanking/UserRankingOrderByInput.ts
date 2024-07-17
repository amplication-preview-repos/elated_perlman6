import { SortOrder } from "../../util/SortOrder";

export type UserRankingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  date?: SortOrder;
  rank?: SortOrder;
  user_idId?: SortOrder;
};
