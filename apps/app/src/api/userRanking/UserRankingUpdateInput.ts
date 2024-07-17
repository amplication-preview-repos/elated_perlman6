import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRankingUpdateInput = {
  score?: number | null;
  date?: Date | null;
  rank?: number | null;
  user_id?: UserWhereUniqueInput | null;
};
