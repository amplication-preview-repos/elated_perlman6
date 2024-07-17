import { UserInvitations as TUserInvitations } from "../api/userInvitations/UserInvitations";

export const USERINVITATIONS_TITLE_FIELD = "invitationCode";

export const UserInvitationsTitle = (record: TUserInvitations): string => {
  return record.invitationCode?.toString() || String(record.id);
};
