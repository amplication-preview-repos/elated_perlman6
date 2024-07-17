import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserPrivateInfoWhereInput = {
  id?: StringFilter;
  birthDate?: DateTimeNullableFilter;
  country?: StringNullableFilter;
  city?: StringNullableFilter;
  cc?: StringNullableFilter;
  userId?: StringNullableFilter;
};
