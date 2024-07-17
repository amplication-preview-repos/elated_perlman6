import { Guild } from "../guild/Guild";
import { User } from "../user/User";

export type GuildsMembers = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  joinedAt: Date | null;
  role: string | null;
  guild?: Guild | null;
  user?: User | null;
};
