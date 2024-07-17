import { TransactionsHonorGlory as TTransactionsHonorGlory } from "../api/transactionsHonorGlory/TransactionsHonorGlory";

export const TRANSACTIONSHONORGLORY_TITLE_FIELD = "transactionType";

export const TransactionsHonorGloryTitle = (
  record: TTransactionsHonorGlory
): string => {
  return record.transactionType?.toString() || String(record.id);
};
