import { InputJsonValue } from "../../types";
import { UserRankingCreateNestedManyWithoutUsersInput } from "./UserRankingCreateNestedManyWithoutUsersInput";
import { UserOnboardingCreateNestedManyWithoutUsersInput } from "./UserOnboardingCreateNestedManyWithoutUsersInput";
import { GuildsMembersCreateNestedManyWithoutUsersInput } from "./GuildsMembersCreateNestedManyWithoutUsersInput";
import { AnnouncementCreateNestedManyWithoutUsersInput } from "./AnnouncementCreateNestedManyWithoutUsersInput";
import { TransactionsPortugueseCoinsCreateNestedManyWithoutUsersInput } from "./TransactionsPortugueseCoinsCreateNestedManyWithoutUsersInput";
import { TransactionsHonorGloryCreateNestedManyWithoutUsersInput } from "./TransactionsHonorGloryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userRankings?: UserRankingCreateNestedManyWithoutUsersInput;
  userOnboardings?: UserOnboardingCreateNestedManyWithoutUsersInput;
  guildsMembersItems?: GuildsMembersCreateNestedManyWithoutUsersInput;
  announcements?: AnnouncementCreateNestedManyWithoutUsersInput;
  transactionsPortugueseCoinsItems?: TransactionsPortugueseCoinsCreateNestedManyWithoutUsersInput;
  transactionsHonorGlories?: TransactionsHonorGloryCreateNestedManyWithoutUsersInput;
};
