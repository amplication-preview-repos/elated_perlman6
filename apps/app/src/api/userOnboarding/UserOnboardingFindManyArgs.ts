import { UserOnboardingWhereInput } from "./UserOnboardingWhereInput";
import { UserOnboardingOrderByInput } from "./UserOnboardingOrderByInput";

export type UserOnboardingFindManyArgs = {
  where?: UserOnboardingWhereInput;
  orderBy?: Array<UserOnboardingOrderByInput>;
  skip?: number;
  take?: number;
};
