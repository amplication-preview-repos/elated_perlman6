import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GuildsMembersWhereInput = {
  id?: StringFilter;
  joinedAt?: DateTimeNullableFilter;
  role?: StringNullableFilter;
  guild?: GuildWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
