import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const UserInvitationsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="invitation_code" source="invitationCode" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="invitation_date" source="invitationDate" />
        <DateTimeInput label="expiration_date" source="expirationDate" />
        <TextInput label="invited_by" source="invitedBy" />
        <TextInput label="invited_user" source="invitedUser" />
      </SimpleForm>
    </Edit>
  );
};
