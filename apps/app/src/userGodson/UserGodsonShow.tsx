import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserGodsonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="relationship_date" source="relationshipDate" />
        <TextField label="godfather" source="godfather" />
        <TextField label="godson" source="godson" />
      </SimpleShowLayout>
    </Show>
  );
};
