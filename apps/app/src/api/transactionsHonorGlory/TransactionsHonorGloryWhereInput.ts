import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TransactionsHonorGloryWhereInput = {
  id?: StringFilter;
  transactionType?: StringNullableFilter;
  amount?: FloatNullableFilter;
  description?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  SenderUser?: UserListRelationFilter;
  receiveruser?: StringNullableFilter;
};
