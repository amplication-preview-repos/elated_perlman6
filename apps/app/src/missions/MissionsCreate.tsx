import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { GuildTitle } from "../guild/GuildTitle";

export const MissionsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="dueDate" source="dueDate" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="guild.id" reference="Guild" label="Guild">
          <SelectInput optionText={GuildTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
