import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserInvitationsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"user_invitationsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="invitation_code" source="invitationCode" />
        <TextField label="status" source="status" />
        <TextField label="invitation_date" source="invitationDate" />
        <TextField label="expiration_date" source="expirationDate" />
        <TextField label="invited_by" source="invitedBy" />
        <TextField label="invited_user" source="invitedUser" />
      </Datagrid>
    </List>
  );
};
