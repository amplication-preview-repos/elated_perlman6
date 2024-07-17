import { SortOrder } from "../../util/SortOrder";

export type UserInvitationsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  invitationCode?: SortOrder;
  status?: SortOrder;
  invitationDate?: SortOrder;
  expirationDate?: SortOrder;
  invitedBy?: SortOrder;
  invitedUser?: SortOrder;
};
