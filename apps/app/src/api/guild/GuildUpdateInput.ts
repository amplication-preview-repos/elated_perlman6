import { GuildsPrivateInfoUpdateManyWithoutGuildsInput } from "./GuildsPrivateInfoUpdateManyWithoutGuildsInput";
import { GuildsMembersUpdateManyWithoutGuildsInput } from "./GuildsMembersUpdateManyWithoutGuildsInput";
import { GuildsJoinInvitationsUpdateManyWithoutGuildsInput } from "./GuildsJoinInvitationsUpdateManyWithoutGuildsInput";
import { GuildsCoinsUpdateManyWithoutGuildsInput } from "./GuildsCoinsUpdateManyWithoutGuildsInput";
import { MissionsWhereUniqueInput } from "../missions/MissionsWhereUniqueInput";

export type GuildUpdateInput = {
  title?: string;
  slug?: string;
  guildsPrivateInfos?: GuildsPrivateInfoUpdateManyWithoutGuildsInput;
  guildsMembersItems?: GuildsMembersUpdateManyWithoutGuildsInput;
  guildsJoinInvitationsItems?: GuildsJoinInvitationsUpdateManyWithoutGuildsInput;
  guildsCoinsItems?: GuildsCoinsUpdateManyWithoutGuildsInput;
  missionsItems?: MissionsWhereUniqueInput | null;
};
