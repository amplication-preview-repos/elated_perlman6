import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserOnboardingWhereInput = {
  id?: StringFilter;
  step?: StringNullableFilter;
  completed?: BooleanNullableFilter;
  date?: DateTimeNullableFilter;
  user_id?: UserWhereUniqueInput;
};
