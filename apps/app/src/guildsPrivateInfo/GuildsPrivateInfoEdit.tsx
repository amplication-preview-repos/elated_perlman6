import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GuildTitle } from "../guild/GuildTitle";

export const GuildsPrivateInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <TextInput label="billing_address" multiline source="billing_address" />
        <ReferenceInput source="guild.id" reference="Guild" label="Guild">
          <SelectInput optionText={GuildTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
