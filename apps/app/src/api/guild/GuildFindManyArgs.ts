import { GuildWhereInput } from "./GuildWhereInput";
import { GuildOrderByInput } from "./GuildOrderByInput";

export type GuildFindManyArgs = {
  where?: GuildWhereInput;
  orderBy?: Array<GuildOrderByInput>;
  skip?: number;
  take?: number;
};
