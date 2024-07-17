import { User } from "../user/User";

export type Announcement = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  publishDate: Date | null;
  isActive: boolean | null;
  user?: User | null;
};
