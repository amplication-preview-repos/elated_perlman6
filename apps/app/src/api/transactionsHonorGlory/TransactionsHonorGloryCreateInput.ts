import { UserCreateNestedManyWithoutTransactionsHonorGloriesInput } from "./UserCreateNestedManyWithoutTransactionsHonorGloriesInput";

export type TransactionsHonorGloryCreateInput = {
  transactionType?: string | null;
  amount?: number | null;
  description?: string | null;
  timestamp?: Date | null;
  SenderUser?: UserCreateNestedManyWithoutTransactionsHonorGloriesInput;
  receiveruser?: string | null;
};
