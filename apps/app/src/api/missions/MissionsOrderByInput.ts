import { SortOrder } from "../../util/SortOrder";

export type MissionsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  dueDate?: SortOrder;
  title?: SortOrder;
  guildId?: SortOrder;
};
