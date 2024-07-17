import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type MissionsUpdateInput = {
  description?: string | null;
  status?: "Option1" | null;
  dueDate?: Date | null;
  title?: string | null;
  guild?: GuildWhereUniqueInput | null;
};
