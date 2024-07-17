import { UserUpdateManyWithoutTransactionsHonorGloriesInput } from "./UserUpdateManyWithoutTransactionsHonorGloriesInput";

export type TransactionsHonorGloryUpdateInput = {
  transactionType?: string | null;
  amount?: number | null;
  description?: string | null;
  timestamp?: Date | null;
  SenderUser?: UserUpdateManyWithoutTransactionsHonorGloriesInput;
  receiveruser?: string | null;
};
