import { User } from "../user/User";

export type TransactionsHonorGlory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  transactionType: string | null;
  amount: number | null;
  description: string | null;
  timestamp: Date | null;
  SenderUser?: Array<User>;
  receiveruser: string | null;
};
