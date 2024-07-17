import { SortOrder } from "../../util/SortOrder";

export type AnnouncementOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  publishDate?: SortOrder;
  isActive?: SortOrder;
  userId?: SortOrder;
};
