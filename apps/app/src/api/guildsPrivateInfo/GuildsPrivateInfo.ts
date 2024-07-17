import { Guild } from "../guild/Guild";

export type GuildsPrivateInfo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lastUpdated: Date | null;
  billing_address: string | null;
  guild?: Guild | null;
};
