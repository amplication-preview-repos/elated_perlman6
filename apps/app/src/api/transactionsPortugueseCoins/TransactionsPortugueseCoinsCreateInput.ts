import { UserCreateNestedManyWithoutTransactionsPortugueseCoinsItemsInput } from "./UserCreateNestedManyWithoutTransactionsPortugueseCoinsItemsInput";

export type TransactionsPortugueseCoinsCreateInput = {
  amount?: number | null;
  timestamp?: Date | null;
  description?: string | null;
  transactionType?: string | null;
  ReceivedUser?: UserCreateNestedManyWithoutTransactionsPortugueseCoinsItemsInput;
  SenderId?: string | null;
};
