import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UserGodsonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="relationship_date" source="relationshipDate" />
        <TextInput label="godfather" source="godfather" />
        <TextInput label="godson" source="godson" />
      </SimpleForm>
    </Edit>
  );
};
