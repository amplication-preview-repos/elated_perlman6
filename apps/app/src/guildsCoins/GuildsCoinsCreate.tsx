import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GuildTitle } from "../guild/GuildTitle";

export const GuildsCoinsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="coins" source="coins" />
        <ReferenceInput source="guild.id" reference="Guild" label="guild">
          <SelectInput optionText={GuildTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
