import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="location" source="location" />
        <TextField label="startTime" source="startTime" />
        <TextField label="endTime" source="endTime" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="Organizer" source="organizer" />
      </SimpleShowLayout>
    </Show>
  );
};
