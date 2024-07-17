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
import { GuildsJoinInvitationsWhereInput } from "./GuildsJoinInvitationsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GuildsJoinInvitationsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GuildsJoinInvitationsWhereInput,
  })
  @ValidateNested()
  @Type(() => GuildsJoinInvitationsWhereInput)
  @IsOptional()
  @Field(() => GuildsJoinInvitationsWhereInput, {
    nullable: true,
  })
  every?: GuildsJoinInvitationsWhereInput;

  @ApiProperty({
    required: false,
    type: () => GuildsJoinInvitationsWhereInput,
  })
  @ValidateNested()
  @Type(() => GuildsJoinInvitationsWhereInput)
  @IsOptional()
  @Field(() => GuildsJoinInvitationsWhereInput, {
    nullable: true,
  })
  some?: GuildsJoinInvitationsWhereInput;

  @ApiProperty({
    required: false,
    type: () => GuildsJoinInvitationsWhereInput,
  })
  @ValidateNested()
  @Type(() => GuildsJoinInvitationsWhereInput)
  @IsOptional()
  @Field(() => GuildsJoinInvitationsWhereInput, {
    nullable: true,
  })
  none?: GuildsJoinInvitationsWhereInput;
}
export { GuildsJoinInvitationsListRelationFilter as GuildsJoinInvitationsListRelationFilter };
