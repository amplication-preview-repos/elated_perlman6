import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GUILD_TITLE_FIELD } from "../guild/GuildTitle";

export const GuildsJoinInvitationsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GuildsJoinInvitationsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="sentAt" source="sentAt" />
        <TextField label="responseAt" source="responseAt" />
        <TextField label="status" source="status" />
        <ReferenceField label="Guild" source="guild.id" reference="Guild">
          <TextField source={GUILD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="inviterUserId" source="inviterUserId" />
        <TextField label="inviteeUserEmail" source="inviteeUserEmail" />
        <TextField label="InviteeUserId" source="inviteeUserId" />
      </Datagrid>
    </List>
  );
};
