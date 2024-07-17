import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type MissionsCreateInput = {
  description?: string | null;
  status?: "Option1" | null;
  dueDate?: Date | null;
  title?: string | null;
  guild?: GuildWhereUniqueInput | null;
};
