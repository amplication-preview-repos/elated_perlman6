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

export const GuildsPrivateInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="lastUpdated" source="lastUpdated" />
        <TextField label="billing_address" source="billing_address" />
        <ReferenceField label="Guild" source="guild.id" reference="Guild">
          <TextField source={GUILD_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
