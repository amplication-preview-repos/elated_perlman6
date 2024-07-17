import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type GuildsCoinsWhereInput = {
  id?: StringFilter;
  coins?: IntNullableFilter;
  guild?: GuildWhereUniqueInput;
};
