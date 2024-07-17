import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TransactionsHonorGloryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="transactionType" source="transactionType" />
        <TextField label="amount" source="amount" />
        <TextField label="description" source="description" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="Receiveruser" source="receiveruser" />
      </SimpleShowLayout>
    </Show>
  );
};
