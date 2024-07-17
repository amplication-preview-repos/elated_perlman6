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
import { GUILD_TITLE_FIELD } from "../guild/GuildTitle";

export const GuildsPrivateInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GuildsPrivateInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="lastUpdated" source="lastUpdated" />
        <TextField label="billing_address" source="billing_address" />
        <ReferenceField label="Guild" source="guild.id" reference="Guild">
          <TextField source={GUILD_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
