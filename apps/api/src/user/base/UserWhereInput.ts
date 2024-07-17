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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserRankingListRelationFilter } from "../../userRanking/base/UserRankingListRelationFilter";
import { UserOnboardingListRelationFilter } from "../../userOnboarding/base/UserOnboardingListRelationFilter";
import { GuildsMembersListRelationFilter } from "../../guildsMembers/base/GuildsMembersListRelationFilter";
import { AnnouncementListRelationFilter } from "../../announcement/base/AnnouncementListRelationFilter";
import { TransactionsPortugueseCoinsListRelationFilter } from "../../transactionsPortugueseCoins/base/TransactionsPortugueseCoinsListRelationFilter";
import { TransactionsHonorGloryListRelationFilter } from "../../transactionsHonorGlory/base/TransactionsHonorGloryListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserRankingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserRankingListRelationFilter)
  @IsOptional()
  @Field(() => UserRankingListRelationFilter, {
    nullable: true,
  })
  userRankings?: UserRankingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserOnboardingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserOnboardingListRelationFilter)
  @IsOptional()
  @Field(() => UserOnboardingListRelationFilter, {
    nullable: true,
  })
  userOnboardings?: UserOnboardingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => GuildsMembersListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GuildsMembersListRelationFilter)
  @IsOptional()
  @Field(() => GuildsMembersListRelationFilter, {
    nullable: true,
  })
  guildsMembersItems?: GuildsMembersListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AnnouncementListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AnnouncementListRelationFilter)
  @IsOptional()
  @Field(() => AnnouncementListRelationFilter, {
    nullable: true,
  })
  announcements?: AnnouncementListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TransactionsPortugueseCoinsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionsPortugueseCoinsListRelationFilter)
  @IsOptional()
  @Field(() => TransactionsPortugueseCoinsListRelationFilter, {
    nullable: true,
  })
  transactionsPortugueseCoinsItems?: TransactionsPortugueseCoinsListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TransactionsHonorGloryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionsHonorGloryListRelationFilter)
  @IsOptional()
  @Field(() => TransactionsHonorGloryListRelationFilter, {
    nullable: true,
  })
  transactionsHonorGlories?: TransactionsHonorGloryListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
