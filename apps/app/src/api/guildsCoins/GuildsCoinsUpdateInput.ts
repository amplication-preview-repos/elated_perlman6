import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type GuildsCoinsUpdateInput = {
  coins?: number | null;
  guild?: GuildWhereUniqueInput | null;
};
