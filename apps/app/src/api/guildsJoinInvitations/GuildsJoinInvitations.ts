import { Guild } from "../guild/Guild";

export type GuildsJoinInvitations = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt: Date | null;
  responseAt: Date | null;
  status?: "Option1" | null;
  guild?: Guild | null;
  inviterUserId: string | null;
  inviteeUserEmail: string | null;
  inviteeUserId: string | null;
};
