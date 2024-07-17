import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="price" source="price" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="stock" source="stock" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="name" source="name" />
        <TextField label="category" source="category" />
      </SimpleShowLayout>
    </Show>
  );
};