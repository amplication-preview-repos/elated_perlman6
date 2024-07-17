import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type GuildsCoinsCreateInput = {
  coins?: number | null;
  guild?: GuildWhereUniqueInput | null;
};
