export type EventCreateInput = {
  title?: string | null;
  description?: string | null;
  location?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  isActive?: boolean | null;
  organizer?: string | null;
};
