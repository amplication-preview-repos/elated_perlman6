import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionsPortugueseCoinsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TransactionsPortugueseCoinsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="amount" source="amount" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="description" source="description" />
        <TextField label="transactionType" source="transactionType" />
        <TextField label="SenderId" source="SenderId" />
      </Datagrid>
    </List>
  );
};
