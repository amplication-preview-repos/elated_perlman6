export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  location: string | null;
  startTime: Date | null;
  endTime: Date | null;
  isActive: boolean | null;
  organizer: string | null;
};
