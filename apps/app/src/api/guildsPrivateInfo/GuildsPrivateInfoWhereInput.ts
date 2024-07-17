import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type GuildsPrivateInfoWhereInput = {
  id?: StringFilter;
  lastUpdated?: DateTimeNullableFilter;
  billing_address?: StringNullableFilter;
  guild?: GuildWhereUniqueInput;
};
