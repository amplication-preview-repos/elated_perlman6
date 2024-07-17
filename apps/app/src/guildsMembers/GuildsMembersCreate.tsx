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
import { UserTitle } from "../user/UserTitle";

export const GuildsMembersCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="joinedAt" source="joinedAt" />
        <TextInput label="role" source="role" />
        <ReferenceInput source="guild.id" reference="Guild" label="Guild">
          <SelectInput optionText={GuildTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
