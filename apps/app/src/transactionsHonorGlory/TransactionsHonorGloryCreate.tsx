import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TransactionsHonorGloryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="transactionType" source="transactionType" />
        <NumberInput label="amount" source="amount" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceArrayInput
          source="SenderUser"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <TextInput label="Receiveruser" source="receiveruser" />
      </SimpleForm>
    </Create>
  );
};
