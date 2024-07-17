import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserGodsonWhereInput = {
  id?: StringFilter;
  relationshipDate?: DateTimeNullableFilter;
  godfather?: StringNullableFilter;
  godson?: StringNullableFilter;
};
