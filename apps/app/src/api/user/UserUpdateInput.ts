import { InputJsonValue } from "../../types";
import { UserRankingUpdateManyWithoutUsersInput } from "./UserRankingUpdateManyWithoutUsersInput";
import { UserOnboardingUpdateManyWithoutUsersInput } from "./UserOnboardingUpdateManyWithoutUsersInput";
import { GuildsMembersUpdateManyWithoutUsersInput } from "./GuildsMembersUpdateManyWithoutUsersInput";
import { AnnouncementUpdateManyWithoutUsersInput } from "./AnnouncementUpdateManyWithoutUsersInput";
import { TransactionsPortugueseCoinsUpdateManyWithoutUsersInput } from "./TransactionsPortugueseCoinsUpdateManyWithoutUsersInput";
import { TransactionsHonorGloryUpdateManyWithoutUsersInput } from "./TransactionsHonorGloryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userRankings?: UserRankingUpdateManyWithoutUsersInput;
  userOnboardings?: UserOnboardingUpdateManyWithoutUsersInput;
  guildsMembersItems?: GuildsMembersUpdateManyWithoutUsersInput;
  announcements?: AnnouncementUpdateManyWithoutUsersInput;
  transactionsPortugueseCoinsItems?: TransactionsPortugueseCoinsUpdateManyWithoutUsersInput;
  transactionsHonorGlories?: TransactionsHonorGloryUpdateManyWithoutUsersInput;
};
