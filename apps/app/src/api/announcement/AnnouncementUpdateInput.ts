import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnnouncementUpdateInput = {
  title?: string | null;
  content?: string | null;
  publishDate?: Date | null;
  isActive?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
