import { SortOrder } from "../../util/SortOrder";

export type GuildsJoinInvitationsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sentAt?: SortOrder;
  responseAt?: SortOrder;
  status?: SortOrder;
  guildId?: SortOrder;
  inviterUserId?: SortOrder;
  inviteeUserEmail?: SortOrder;
  inviteeUserId?: SortOrder;
};
