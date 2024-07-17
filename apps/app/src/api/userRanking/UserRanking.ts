import { User } from "../user/User";

export type UserRanking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  date: Date | null;
  rank: number | null;
  user_id?: User | null;
};
