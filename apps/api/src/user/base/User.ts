/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { UserRanking } from "../../userRanking/base/UserRanking";
import { UserOnboarding } from "../../userOnboarding/base/UserOnboarding";
import { GuildsMembers } from "../../guildsMembers/base/GuildsMembers";
import { Announcement } from "../../announcement/base/Announcement";
import { TransactionsPortugueseCoins } from "../../transactionsPortugueseCoins/base/TransactionsPortugueseCoins";
import { TransactionsHonorGlory } from "../../transactionsHonorGlory/base/TransactionsHonorGlory";

@ObjectType()
class User {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [UserRanking],
  })
  @ValidateNested()
  @Type(() => UserRanking)
  @IsOptional()
  userRankings?: Array<UserRanking>;

  @ApiProperty({
    required: false,
    type: () => [UserOnboarding],
  })
  @ValidateNested()
  @Type(() => UserOnboarding)
  @IsOptional()
  userOnboardings?: Array<UserOnboarding>;

  @ApiProperty({
    required: false,
    type: () => [GuildsMembers],
  })
  @ValidateNested()
  @Type(() => GuildsMembers)
  @IsOptional()
  guildsMembersItems?: Array<GuildsMembers>;

  @ApiProperty({
    required: false,
    type: () => [Announcement],
  })
  @ValidateNested()
  @Type(() => Announcement)
  @IsOptional()
  announcements?: Array<Announcement>;

  @ApiProperty({
    required: false,
    type: () => [TransactionsPortugueseCoins],
  })
  @ValidateNested()
  @Type(() => TransactionsPortugueseCoins)
  @IsOptional()
  transactionsPortugueseCoinsItems?: Array<TransactionsPortugueseCoins>;

  @ApiProperty({
    required: false,
    type: () => [TransactionsHonorGlory],
  })
  @ValidateNested()
  @Type(() => TransactionsHonorGlory)
  @IsOptional()
  transactionsHonorGlories?: Array<TransactionsHonorGlory>;
}

export { User as User };
