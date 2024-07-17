import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserInvitationsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="invitation_code" source="invitationCode" />
        <TextField label="status" source="status" />
        <TextField label="invitation_date" source="invitationDate" />
        <TextField label="expiration_date" source="expirationDate" />
        <TextField label="invited_by" source="invitedBy" />
        <TextField label="invited_user" source="invitedUser" />
      </SimpleShowLayout>
    </Show>
  );
};
