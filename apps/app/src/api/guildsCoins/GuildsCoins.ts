import { Guild } from "../guild/Guild";

export type GuildsCoins = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  coins: number | null;
  guild?: Guild | null;
};
