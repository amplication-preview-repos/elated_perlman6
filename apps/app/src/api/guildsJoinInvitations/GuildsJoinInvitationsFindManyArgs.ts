import { GuildsJoinInvitationsWhereInput } from "./GuildsJoinInvitationsWhereInput";
import { GuildsJoinInvitationsOrderByInput } from "./GuildsJoinInvitationsOrderByInput";

export type GuildsJoinInvitationsFindManyArgs = {
  where?: GuildsJoinInvitationsWhereInput;
  orderBy?: Array<GuildsJoinInvitationsOrderByInput>;
  skip?: number;
  take?: number;
};
