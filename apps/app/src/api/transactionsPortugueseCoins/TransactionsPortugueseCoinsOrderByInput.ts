import { SortOrder } from "../../util/SortOrder";

export type TransactionsPortugueseCoinsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  timestamp?: SortOrder;
  description?: SortOrder;
  transactionType?: SortOrder;
  SenderId?: SortOrder;
};
