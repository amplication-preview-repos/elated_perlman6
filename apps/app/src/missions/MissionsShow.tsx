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

export const MissionsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="status" source="status" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="title" source="title" />
        <ReferenceField label="Guild" source="guild.id" reference="Guild">
          <TextField source={GUILD_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
