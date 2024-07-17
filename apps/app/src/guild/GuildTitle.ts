import { Guild as TGuild } from "../api/guild/Guild";

export const GUILD_TITLE_FIELD = "title";

export const GuildTitle = (record: TGuild): string => {
  return record.title?.toString() || String(record.id);
};
