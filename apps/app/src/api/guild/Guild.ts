import { GuildsPrivateInfo } from "../guildsPrivateInfo/GuildsPrivateInfo";
import { GuildsMembers } from "../guildsMembers/GuildsMembers";
import { GuildsJoinInvitations } from "../guildsJoinInvitations/GuildsJoinInvitations";
import { GuildsCoins } from "../guildsCoins/GuildsCoins";
import { Missions } from "../missions/Missions";

export type Guild = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  slug: string;
  guildsPrivateInfos?: Array<GuildsPrivateInfo>;
  guildsMembersItems?: Array<GuildsMembers>;
  guildsJoinInvitationsItems?: Array<GuildsJoinInvitations>;
  guildsCoinsItems?: Array<GuildsCoins>;
  missionsItems?: Missions | null;
};
