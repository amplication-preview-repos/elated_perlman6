import { User } from "../user/User";

export type UserOnboarding = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  step: string | null;
  completed: boolean | null;
  date: Date | null;
  user_id?: User | null;
};
