import { GuildsPrivateInfoWhereInput } from "./GuildsPrivateInfoWhereInput";
import { GuildsPrivateInfoOrderByInput } from "./GuildsPrivateInfoOrderByInput";

export type GuildsPrivateInfoFindManyArgs = {
  where?: GuildsPrivateInfoWhereInput;
  orderBy?: Array<GuildsPrivateInfoOrderByInput>;
  skip?: number;
  take?: number;
};
