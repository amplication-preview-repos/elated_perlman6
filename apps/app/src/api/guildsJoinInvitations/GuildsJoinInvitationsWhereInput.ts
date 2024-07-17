import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GuildWhereUniqueInput } from "../guild/GuildWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GuildsJoinInvitationsWhereInput = {
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  responseAt?: DateTimeNullableFilter;
  status?: "Option1";
  guild?: GuildWhereUniqueInput;
  inviterUserId?: StringNullableFilter;
  inviteeUserEmail?: StringNullableFilter;
  inviteeUserId?: StringNullableFilter;
};
