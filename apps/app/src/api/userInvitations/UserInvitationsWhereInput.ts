import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserInvitationsWhereInput = {
  id?: StringFilter;
  invitationCode?: StringNullableFilter;
  status?: "Option1";
  invitationDate?: DateTimeNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  invitedBy?: StringNullableFilter;
  invitedUser?: StringNullableFilter;
};
