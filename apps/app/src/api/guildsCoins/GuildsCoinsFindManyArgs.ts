import { GuildsCoinsWhereInput } from "./GuildsCoinsWhereInput";
import { GuildsCoinsOrderByInput } from "./GuildsCoinsOrderByInput";

export type GuildsCoinsFindManyArgs = {
  where?: GuildsCoinsWhereInput;
  orderBy?: Array<GuildsCoinsOrderByInput>;
  skip?: number;
  take?: number;
};
