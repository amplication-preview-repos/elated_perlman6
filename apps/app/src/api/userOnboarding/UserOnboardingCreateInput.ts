import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserOnboardingCreateInput = {
  step?: string | null;
  completed?: boolean | null;
  date?: Date | null;
  user_id?: UserWhereUniqueInput | null;
};
