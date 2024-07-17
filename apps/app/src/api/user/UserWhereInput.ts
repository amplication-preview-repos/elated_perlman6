import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserRankingListRelationFilter } from "../userRanking/UserRankingListRelationFilter";
import { UserOnboardingListRelationFilter } from "../userOnboarding/UserOnboardingListRelationFilter";
import { GuildsMembersListRelationFilter } from "../guildsMembers/GuildsMembersListRelationFilter";
import { AnnouncementListRelationFilter } from "../announcement/AnnouncementListRelationFilter";
import { TransactionsPortugueseCoinsListRelationFilter } from "../transactionsPortugueseCoins/TransactionsPortugueseCoinsListRelationFilter";
import { TransactionsHonorGloryListRelationFilter } from "../transactionsHonorGlory/TransactionsHonorGloryListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userRankings?: UserRankingListRelationFilter;
  userOnboardings?: UserOnboardingListRelationFilter;
  guildsMembersItems?: GuildsMembersListRelationFilter;
  announcements?: AnnouncementListRelationFilter;
  transactionsPortugueseCoinsItems?: TransactionsPortugueseCoinsListRelationFilter;
  transactionsHonorGlories?: TransactionsHonorGloryListRelationFilter;
};
