import { Announcement as TAnnouncement } from "../api/announcement/Announcement";

export const ANNOUNCEMENT_TITLE_FIELD = "title";

export const AnnouncementTitle = (record: TAnnouncement): string => {
  return record.title?.toString() || String(record.id);
};
