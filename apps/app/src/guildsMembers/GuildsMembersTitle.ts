import { GuildsMembers as TGuildsMembers } from "../api/guildsMembers/GuildsMembers";

export const GUILDSMEMBERS_TITLE_FIELD = "role";

export const GuildsMembersTitle = (record: TGuildsMembers): string => {
  return record.role?.toString() || String(record.id);
};
