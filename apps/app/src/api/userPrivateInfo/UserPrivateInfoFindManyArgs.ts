import { UserPrivateInfoWhereInput } from "./UserPrivateInfoWhereInput";
import { UserPrivateInfoOrderByInput } from "./UserPrivateInfoOrderByInput";

export type UserPrivateInfoFindManyArgs = {
  where?: UserPrivateInfoWhereInput;
  orderBy?: Array<UserPrivateInfoOrderByInput>;
  skip?: number;
  take?: number;
};
