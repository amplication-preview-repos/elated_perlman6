import { UserRanking as TUserRanking } from "../api/userRanking/UserRanking";

export const USERRANKING_TITLE_FIELD = "id";

export const UserRankingTitle = (record: TUserRanking): string => {
  return record.id?.toString() || String(record.id);
};
