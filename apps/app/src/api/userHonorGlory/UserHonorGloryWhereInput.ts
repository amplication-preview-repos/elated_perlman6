import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserHonorGloryWhereInput = {
  id?: StringFilter;
  honor?: IntNullableFilter;
  userId?: StringNullableFilter;
};
