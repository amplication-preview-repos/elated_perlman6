import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserOnboardingUpdateInput = {
  step?: string | null;
  completed?: boolean | null;
  date?: Date | null;
  user_id?: UserWhereUniqueInput | null;
};
