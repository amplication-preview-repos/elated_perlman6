import { UserPrivateInfo as TUserPrivateInfo } from "../api/userPrivateInfo/UserPrivateInfo";

export const USERPRIVATEINFO_TITLE_FIELD = "country";

export const UserPrivateInfoTitle = (record: TUserPrivateInfo): string => {
  return record.country?.toString() || String(record.id);
};
