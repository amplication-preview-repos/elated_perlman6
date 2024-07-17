import { UserUpdateManyWithoutTransactionsPortugueseCoinsItemsInput } from "./UserUpdateManyWithoutTransactionsPortugueseCoinsItemsInput";

export type TransactionsPortugueseCoinsUpdateInput = {
  amount?: number | null;
  timestamp?: Date | null;
  description?: string | null;
  transactionType?: string | null;
  ReceivedUser?: UserUpdateManyWithoutTransactionsPortugueseCoinsItemsInput;
  SenderId?: string | null;
};
