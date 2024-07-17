import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UserPortugueseGoldenCoinCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="coins" source="coins" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
