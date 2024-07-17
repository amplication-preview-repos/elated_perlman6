import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UserHonorGloryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="honor" source="honor" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
