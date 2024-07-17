import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { GuildTitle } from "../guild/GuildTitle";

export const GuildsJoinInvitationsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="sentAt" source="sentAt" />
        <DateTimeInput label="responseAt" source="responseAt" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="guild.id" reference="Guild" label="Guild">
          <SelectInput optionText={GuildTitle} />
        </ReferenceInput>
        <TextInput label="inviterUserId" source="inviterUserId" />
        <TextInput
          label="inviteeUserEmail"
          source="inviteeUserEmail"
          type="email"
        />
        <TextInput label="InviteeUserId" source="inviteeUserId" />
      </SimpleForm>
    </Edit>
  );
};
