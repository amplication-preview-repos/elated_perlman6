import { SortOrder } from "../../util/SortOrder";

export type GuildsMembersOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  joinedAt?: SortOrder;
  role?: SortOrder;
  guildId?: SortOrder;
  userId?: SortOrder;
};
