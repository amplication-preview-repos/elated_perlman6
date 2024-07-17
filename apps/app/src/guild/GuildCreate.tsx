import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GuildsPrivateInfoTitle } from "../guildsPrivateInfo/GuildsPrivateInfoTitle";
import { GuildsMembersTitle } from "../guildsMembers/GuildsMembersTitle";
import { GuildsJoinInvitationsTitle } from "../guildsJoinInvitations/GuildsJoinInvitationsTitle";
import { GuildsCoinsTitle } from "../guildsCoins/GuildsCoinsTitle";
import { MissionsTitle } from "../missions/MissionsTitle";

export const GuildCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="slug" source="slug" />
        <ReferenceArrayInput
          source="guildsPrivateInfos"
          reference="GuildsPrivateInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GuildsPrivateInfoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="guildsMembersItems"
          reference="GuildsMembers"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GuildsMembersTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="guildsJoinInvitationsItems"
          reference="GuildsJoinInvitations"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GuildsJoinInvitationsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="guildsCoinsItems"
          reference="GuildsCoins"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GuildsCoinsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="missionsItems.id"
          reference="Missions"
          label="MissionsItems"
        >
          <SelectInput optionText={MissionsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
