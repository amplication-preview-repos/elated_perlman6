import { JsonValue } from "type-fest";
import { UserRanking } from "../userRanking/UserRanking";
import { UserOnboarding } from "../userOnboarding/UserOnboarding";
import { GuildsMembers } from "../guildsMembers/GuildsMembers";
import { Announcement } from "../announcement/Announcement";
import { TransactionsPortugueseCoins } from "../transactionsPortugueseCoins/TransactionsPortugueseCoins";
import { TransactionsHonorGlory } from "../transactionsHonorGlory/TransactionsHonorGlory";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userRankings?: Array<UserRanking>;
  userOnboardings?: Array<UserOnboarding>;
  guildsMembersItems?: Array<GuildsMembers>;
  announcements?: Array<Announcement>;
  transactionsPortugueseCoinsItems?: Array<TransactionsPortugueseCoins>;
  transactionsHonorGlories?: Array<TransactionsHonorGlory>;
};
