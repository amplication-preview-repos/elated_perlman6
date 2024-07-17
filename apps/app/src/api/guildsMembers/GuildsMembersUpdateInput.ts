import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GuildsMembersUpdateInput = {
  joinedAt?: Date | null;
  role?: string | null;
  guild?: GuildWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
