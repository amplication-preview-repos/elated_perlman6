import { GuildsPrivateInfo as TGuildsPrivateInfo } from "../api/guildsPrivateInfo/GuildsPrivateInfo";

export const GUILDSPRIVATEINFO_TITLE_FIELD = "id";

export const GuildsPrivateInfoTitle = (record: TGuildsPrivateInfo): string => {
  return record.id?.toString() || String(record.id);
};
