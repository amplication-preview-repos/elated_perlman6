import { GuildsJoinInvitations as TGuildsJoinInvitations } from "../api/guildsJoinInvitations/GuildsJoinInvitations";

export const GUILDSJOININVITATIONS_TITLE_FIELD = "inviterUserId";

export const GuildsJoinInvitationsTitle = (
  record: TGuildsJoinInvitations
): string => {
  return record.inviterUserId?.toString() || String(record.id);
};
