import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRankingWhereInput = {
  id?: StringFilter;
  score?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  rank?: IntNullableFilter;
  user_id?: UserWhereUniqueInput;
};
