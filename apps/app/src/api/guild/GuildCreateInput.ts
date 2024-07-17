import { GuildsPrivateInfoCreateNestedManyWithoutGuildsInput } from "./GuildsPrivateInfoCreateNestedManyWithoutGuildsInput";
import { GuildsMembersCreateNestedManyWithoutGuildsInput } from "./GuildsMembersCreateNestedManyWithoutGuildsInput";
import { GuildsJoinInvitationsCreateNestedManyWithoutGuildsInput } from "./GuildsJoinInvitationsCreateNestedManyWithoutGuildsInput";
import { GuildsCoinsCreateNestedManyWithoutGuildsInput } from "./GuildsCoinsCreateNestedManyWithoutGuildsInput";
import { MissionsWhereUniqueInput } from "../missions/MissionsWhereUniqueInput";

export type GuildCreateInput = {
  title: string;
  slug: string;
  guildsPrivateInfos?: GuildsPrivateInfoCreateNestedManyWithoutGuildsInput;
  guildsMembersItems?: GuildsMembersCreateNestedManyWithoutGuildsInput;
  guildsJoinInvitationsItems?: GuildsJoinInvitationsCreateNestedManyWithoutGuildsInput;
  guildsCoinsItems?: GuildsCoinsCreateNestedManyWithoutGuildsInput;
  missionsItems?: MissionsWhereUniqueInput | null;
};
