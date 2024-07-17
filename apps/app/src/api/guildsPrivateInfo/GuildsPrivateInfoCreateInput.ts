import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type GuildsPrivateInfoCreateInput = {
  lastUpdated?: Date | null;
  billing_address?: string | null;
  guild?: GuildWhereUniqueInput | null;
};
