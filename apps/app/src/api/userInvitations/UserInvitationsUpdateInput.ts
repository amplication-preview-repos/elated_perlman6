export type UserInvitationsUpdateInput = {
  invitationCode?: string | null;
  status?: "Option1" | null;
  invitationDate?: Date | null;
  expirationDate?: Date | null;
  invitedBy?: string | null;
  invitedUser?: string | null;
};
