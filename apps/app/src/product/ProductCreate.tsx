import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <BooleanInput label="isActive" source="isActive" />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="name" source="name" />
        <TextInput label="category" source="category" />
      </SimpleForm>
    </Create>
  );
};
