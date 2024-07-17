import { GuildsMembersWhereInput } from "./GuildsMembersWhereInput";
import { GuildsMembersOrderByInput } from "./GuildsMembersOrderByInput";

export type GuildsMembersFindManyArgs = {
  where?: GuildsMembersWhereInput;
  orderBy?: Array<GuildsMembersOrderByInput>;
  skip?: number;
  take?: number;
};
