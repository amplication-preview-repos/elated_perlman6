import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UserPrivateInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="birthDate" source="birthDate" />
        <TextInput label="Country" source="country" />
        <TextInput label="City" source="city" />
        <TextInput label="cc" source="cc" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
