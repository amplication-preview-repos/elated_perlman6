import { TransactionsPortugueseCoinsWhereInput } from "./TransactionsPortugueseCoinsWhereInput";
import { TransactionsPortugueseCoinsOrderByInput } from "./TransactionsPortugueseCoinsOrderByInput";

export type TransactionsPortugueseCoinsFindManyArgs = {
  where?: TransactionsPortugueseCoinsWhereInput;
  orderBy?: Array<TransactionsPortugueseCoinsOrderByInput>;
  skip?: number;
  take?: number;
};
