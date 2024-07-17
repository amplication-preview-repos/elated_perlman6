import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TransactionsHonorGloryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
