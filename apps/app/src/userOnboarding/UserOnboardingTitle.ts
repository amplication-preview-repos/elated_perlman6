import { UserOnboarding as TUserOnboarding } from "../api/userOnboarding/UserOnboarding";

export const USERONBOARDING_TITLE_FIELD = "step";

export const UserOnboardingTitle = (record: TUserOnboarding): string => {
  return record.step?.toString() || String(record.id);
};
