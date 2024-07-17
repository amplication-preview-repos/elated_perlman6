import { Guild } from "../guild/Guild";

export type Missions = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  status?: "Option1" | null;
  dueDate: Date | null;
  title: string | null;
  guild?: Guild | null;
};
