import { GuildsCoins as TGuildsCoins } from "../api/guildsCoins/GuildsCoins";

export const GUILDSCOINS_TITLE_FIELD = "id";

export const GuildsCoinsTitle = (record: TGuildsCoins): string => {
  return record.id?.toString() || String(record.id);
};
