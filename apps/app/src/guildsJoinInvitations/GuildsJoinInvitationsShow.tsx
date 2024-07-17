import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GUILD_TITLE_FIELD } from "../guild/GuildTitle";

export const GuildsJoinInvitationsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
