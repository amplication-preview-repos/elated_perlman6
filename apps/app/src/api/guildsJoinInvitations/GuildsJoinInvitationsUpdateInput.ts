import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";

export type GuildsJoinInvitationsUpdateInput = {
  sentAt?: Date | null;
  responseAt?: Date | null;
  status?: "Option1" | null;
  guild?: GuildWhereUniqueInput | null;
  inviterUserId?: string | null;
  inviteeUserEmail?: string | null;
  inviteeUserId?: string | null;
};
