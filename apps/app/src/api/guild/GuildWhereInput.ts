import { StringFilter } from "../../util/StringFilter";
import { GuildsPrivateInfoListRelationFilter } from "../guildsPrivateInfo/GuildsPrivateInfoListRelationFilter";
import { GuildsMembersListRelationFilter } from "../guildsMembers/GuildsMembersListRelationFilter";
import { GuildsJoinInvitationsListRelationFilter } from "../guildsJoinInvitations/GuildsJoinInvitationsListRelationFilter";
import { GuildsCoinsListRelationFilter } from "../guildsCoins/GuildsCoinsListRelationFilter";
import { MissionsWhereUniqueInput } from "../missions/MissionsWhereUniqueInput";

export type GuildWhereInput = {
  id?: StringFilter;
  title?: StringFilter;
  slug?: StringFilter;
  guildsPrivateInfos?: GuildsPrivateInfoListRelationFilter;
  guildsMembersItems?: GuildsMembersListRelationFilter;
  guildsJoinInvitationsItems?: GuildsJoinInvitationsListRelationFilter;
  guildsCoinsItems?: GuildsCoinsListRelationFilter;
  missionsItems?: MissionsWhereUniqueInput;
};
