/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { GuildsPrivateInfoUpdateManyWithoutGuildsInput } from "./GuildsPrivateInfoUpdateManyWithoutGuildsInput";
import { Type } from "class-transformer";
import { GuildsMembersUpdateManyWithoutGuildsInput } from "./GuildsMembersUpdateManyWithoutGuildsInput";
import { GuildsJoinInvitationsUpdateManyWithoutGuildsInput } from "./GuildsJoinInvitationsUpdateManyWithoutGuildsInput";
import { GuildsCoinsUpdateManyWithoutGuildsInput } from "./GuildsCoinsUpdateManyWithoutGuildsInput";
import { MissionsWhereUniqueInput } from "../../missions/base/MissionsWhereUniqueInput";

@InputType()
class GuildUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  slug?: string;

  @ApiProperty({
    required: false,
    type: () => GuildsPrivateInfoUpdateManyWithoutGuildsInput,
  })
  @ValidateNested()
  @Type(() => GuildsPrivateInfoUpdateManyWithoutGuildsInput)
  @IsOptional()
  @Field(() => GuildsPrivateInfoUpdateManyWithoutGuildsInput, {
    nullable: true,
  })
  guildsPrivateInfos?: GuildsPrivateInfoUpdateManyWithoutGuildsInput;

  @ApiProperty({
    required: false,
    type: () => GuildsMembersUpdateManyWithoutGuildsInput,
  })
  @ValidateNested()
  @Type(() => GuildsMembersUpdateManyWithoutGuildsInput)
  @IsOptional()
  @Field(() => GuildsMembersUpdateManyWithoutGuildsInput, {
    nullable: true,
  })
  guildsMembersItems?: GuildsMembersUpdateManyWithoutGuildsInput;

  @ApiProperty({
    required: false,
    type: () => GuildsJoinInvitationsUpdateManyWithoutGuildsInput,
  })
  @ValidateNested()
  @Type(() => GuildsJoinInvitationsUpdateManyWithoutGuildsInput)
  @IsOptional()
  @Field(() => GuildsJoinInvitationsUpdateManyWithoutGuildsInput, {
    nullable: true,
  })
  guildsJoinInvitationsItems?: GuildsJoinInvitationsUpdateManyWithoutGuildsInput;

  @ApiProperty({
    required: false,
    type: () => GuildsCoinsUpdateManyWithoutGuildsInput,
  })
  @ValidateNested()
  @Type(() => GuildsCoinsUpdateManyWithoutGuildsInput)
  @IsOptional()
  @Field(() => GuildsCoinsUpdateManyWithoutGuildsInput, {
    nullable: true,
  })
  guildsCoinsItems?: GuildsCoinsUpdateManyWithoutGuildsInput;

  @ApiProperty({
    required: false,
    type: () => MissionsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MissionsWhereUniqueInput)
  @IsOptional()
  @Field(() => MissionsWhereUniqueInput, {
    nullable: true,
  })
  missionsItems?: MissionsWhereUniqueInput | null;
}

export { GuildUpdateInput as GuildUpdateInput };