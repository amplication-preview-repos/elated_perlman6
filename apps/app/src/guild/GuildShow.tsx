import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { GUILD_TITLE_FIELD } from "./GuildTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { MISSIONS_TITLE_FIELD } from "../missions/MissionsTitle";

export const GuildShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="GuildsPrivateInfo"
          target="guildId"
          label="GuildsPrivateInfos"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="GuildsMembers"
          target="guildId"
          label="GuildsMembersItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="joinedAt" source="joinedAt" />
            <TextField label="role" source="role" />
            <ReferenceField label="Guild" source="guild.id" reference="Guild">
              <TextField source={GUILD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GuildsJoinInvitations"
          target="guildId"
          label="GuildsJoinInvitationsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="sentAt" source="sentAt" />
            <TextField label="responseAt" source="responseAt" />
            <TextField label="status" source="status" />
            <ReferenceField label="Guild" source="guild.id" reference="Guild">
              <TextField source={GUILD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="inviterUserId" source="inviterUserId" />
            <TextField label="inviteeUserEmail" source="inviteeUserEmail" />
            <TextField label="InviteeUserId" source="inviteeUserId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GuildsCoins"
          target="guildId"
          label="guilds_coinsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="coins" source="coins" />
            <ReferenceField label="guild" source="guild.id" reference="Guild">
              <TextField source={GUILD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
