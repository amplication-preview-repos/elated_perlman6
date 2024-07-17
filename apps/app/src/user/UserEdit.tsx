import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserRankingTitle } from "../userRanking/UserRankingTitle";
import { UserOnboardingTitle } from "../userOnboarding/UserOnboardingTitle";
import { GuildsMembersTitle } from "../guildsMembers/GuildsMembersTitle";
import { AnnouncementTitle } from "../announcement/AnnouncementTitle";
import { TransactionsPortugueseCoinsTitle } from "../transactionsPortugueseCoins/TransactionsPortugueseCoinsTitle";
import { TransactionsHonorGloryTitle } from "../transactionsHonorGlory/TransactionsHonorGloryTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="userRankings"
          reference="UserRanking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserRankingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userOnboardings"
          reference="UserOnboarding"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserOnboardingTitle} />
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
          source="announcements"
          reference="Announcement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnnouncementTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="transactionsPortugueseCoinsItems"
          reference="TransactionsPortugueseCoins"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionsPortugueseCoinsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="transactionsHonorGlories"
          reference="TransactionsHonorGlory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionsHonorGloryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
