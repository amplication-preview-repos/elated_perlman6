import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnnouncementCreateInput = {
  title?: string | null;
  content?: string | null;
  publishDate?: Date | null;
  isActive?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
