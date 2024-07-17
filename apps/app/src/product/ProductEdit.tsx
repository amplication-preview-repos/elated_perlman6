import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <BooleanInput label="isActive" source="isActive" />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="name" source="name" />
        <TextInput label="category" source="category" />
      </SimpleForm>
    </Edit>
  );
};
