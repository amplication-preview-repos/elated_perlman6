import { UserInvitationsWhereInput } from "./UserInvitationsWhereInput";
import { UserInvitationsOrderByInput } from "./UserInvitationsOrderByInput";

export type UserInvitationsFindManyArgs = {
  where?: UserInvitationsWhereInput;
  orderBy?: Array<UserInvitationsOrderByInput>;
  skip?: number;
  take?: number;
};
