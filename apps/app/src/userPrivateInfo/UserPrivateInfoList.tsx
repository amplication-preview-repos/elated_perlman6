import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserPrivateInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserPrivateInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="birthDate" source="birthDate" />
        <TextField label="Country" source="country" />
        <TextField label="City" source="city" />
        <TextField label="cc" source="cc" />
        <TextField label="user_id" source="userId" />
      </Datagrid>
    </List>
  );
};
