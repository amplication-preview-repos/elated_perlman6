import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type MissionsWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  dueDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  guild?: GuildWhereUniqueInput;
};
