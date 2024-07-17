export type UserInvitations = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  invitationCode: string | null;
  status?: "Option1" | null;
  invitationDate: Date | null;
  expirationDate: Date | null;
  invitedBy: string | null;
  invitedUser: string | null;
};
