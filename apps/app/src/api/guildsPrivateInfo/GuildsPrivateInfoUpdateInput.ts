import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type GuildsPrivateInfoUpdateInput = {
  lastUpdated?: Date | null;
  billing_address?: string | null;
  guild?: GuildWhereUniqueInput | null;
};
