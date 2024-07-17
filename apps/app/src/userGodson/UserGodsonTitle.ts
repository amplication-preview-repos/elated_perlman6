import { UserGodson as TUserGodson } from "../api/userGodson/UserGodson";

export const USERGODSON_TITLE_FIELD = "godfather";

export const UserGodsonTitle = (record: TUserGodson): string => {
  return record.godfather?.toString() || String(record.id);
};
