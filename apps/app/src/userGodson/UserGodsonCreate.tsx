import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UserGodsonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="relationship_date" source="relationshipDate" />
        <TextInput label="godfather" source="godfather" />
        <TextInput label="godson" source="godson" />
      </SimpleForm>
    </Create>
  );
};
