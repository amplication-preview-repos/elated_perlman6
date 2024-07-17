import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { GuildTitle } from "../guild/GuildTitle";

export const MissionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
