import { Missions as TMissions } from "../api/missions/Missions";

export const MISSIONS_TITLE_FIELD = "title";

export const MissionsTitle = (record: TMissions): string => {
  return record.title?.toString() || String(record.id);
};
