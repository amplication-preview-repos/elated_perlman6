import { UserHonorGlory as TUserHonorGlory } from "../api/userHonorGlory/UserHonorGlory";

export const USERHONORGLORY_TITLE_FIELD = "userId";

export const UserHonorGloryTitle = (record: TUserHonorGlory): string => {
  return record.userId?.toString() || String(record.id);
};
