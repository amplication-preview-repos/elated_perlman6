import { User } from "../user/User";

export type TransactionsPortugueseCoins = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  timestamp: Date | null;
  description: string | null;
  transactionType: string | null;
  ReceivedUser?: Array<User>;
  SenderId: string | null;
};
