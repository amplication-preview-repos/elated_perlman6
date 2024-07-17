import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MISSIONS_TITLE_FIELD } from "../missions/MissionsTitle";

export const GuildList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"guilds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="slug" source="slug" />
        <ReferenceField
          label="MissionsItems"
          source="missions.id"
          reference="Missions"
        >
          <TextField source={MISSIONS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
