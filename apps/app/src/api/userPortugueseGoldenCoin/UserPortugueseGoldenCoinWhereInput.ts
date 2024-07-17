import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserPortugueseGoldenCoinWhereInput = {
  id?: StringFilter;
  coins?: IntNullableFilter;
  userId?: StringNullableFilter;
};
