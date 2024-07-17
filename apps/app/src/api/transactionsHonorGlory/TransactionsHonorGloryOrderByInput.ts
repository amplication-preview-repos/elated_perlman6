import { SortOrder } from "../../util/SortOrder";

export type TransactionsHonorGloryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  transactionType?: SortOrder;
  amount?: SortOrder;
  description?: SortOrder;
  timestamp?: SortOrder;
  receiveruser?: SortOrder;
};
