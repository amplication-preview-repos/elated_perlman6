import { UserPortugueseGoldenCoin as TUserPortugueseGoldenCoin } from "../api/userPortugueseGoldenCoin/UserPortugueseGoldenCoin";

export const USERPORTUGUESEGOLDENCOIN_TITLE_FIELD = "userId";

export const UserPortugueseGoldenCoinTitle = (
  record: TUserPortugueseGoldenCoin
): string => {
  return record.userId?.toString() || String(record.id);
};
