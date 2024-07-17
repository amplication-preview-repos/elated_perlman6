import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GuildTitle } from "../guild/GuildTitle";

export const GuildsPrivateInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <TextInput label="billing_address" multiline source="billing_address" />
        <ReferenceInput source="guild.id" reference="Guild" label="Guild">
          <SelectInput optionText={GuildTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
