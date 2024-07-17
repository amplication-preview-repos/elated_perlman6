import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  location?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  isActive?: SortOrder;
  organizer?: SortOrder;
};
