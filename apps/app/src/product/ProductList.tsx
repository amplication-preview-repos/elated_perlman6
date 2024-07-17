import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
