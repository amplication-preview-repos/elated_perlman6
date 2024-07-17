import { MissionsWhereInput } from "./MissionsWhereInput";
import { MissionsOrderByInput } from "./MissionsOrderByInput";

export type MissionsFindManyArgs = {
  where?: MissionsWhereInput;
  orderBy?: Array<MissionsOrderByInput>;
  skip?: number;
  take?: number;
};
