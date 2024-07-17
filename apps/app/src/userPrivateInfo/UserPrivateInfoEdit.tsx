import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UserPrivateInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="birthDate" source="birthDate" />
        <TextInput label="Country" source="country" />
        <TextInput label="City" source="city" />
        <TextInput label="cc" source="cc" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
