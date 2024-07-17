import { UserRankingWhereInput } from "./UserRankingWhereInput";
import { UserRankingOrderByInput } from "./UserRankingOrderByInput";

export type UserRankingFindManyArgs = {
  where?: UserRankingWhereInput;
  orderBy?: Array<UserRankingOrderByInput>;
  skip?: number;
  take?: number;
};
