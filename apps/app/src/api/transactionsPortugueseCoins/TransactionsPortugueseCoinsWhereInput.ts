import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TransactionsPortugueseCoinsWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  transactionType?: StringNullableFilter;
  ReceivedUser?: UserListRelationFilter;
  SenderId?: StringNullableFilter;
};
