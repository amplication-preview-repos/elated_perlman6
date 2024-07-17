import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  location?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  isActive?: BooleanNullableFilter;
  organizer?: StringNullableFilter;
};
