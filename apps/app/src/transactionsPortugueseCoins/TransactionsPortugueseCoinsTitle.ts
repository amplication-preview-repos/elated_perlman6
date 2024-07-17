import { TransactionsPortugueseCoins as TTransactionsPortugueseCoins } from "../api/transactionsPortugueseCoins/TransactionsPortugueseCoins";

export const TRANSACTIONSPORTUGUESECOINS_TITLE_FIELD = "transactionType";

export const TransactionsPortugueseCoinsTitle = (
  record: TTransactionsPortugueseCoins
): string => {
  return record.transactionType?.toString() || String(record.id);
};
