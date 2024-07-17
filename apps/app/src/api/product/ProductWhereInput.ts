import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  isActive?: BooleanNullableFilter;
  stock?: IntNullableFilter;
  createdBy?: StringNullableFilter;
  name?: StringNullableFilter;
  category?: StringNullableFilter;
};
