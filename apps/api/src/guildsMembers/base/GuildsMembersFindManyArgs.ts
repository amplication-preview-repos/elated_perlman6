/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GuildsMembersWhereInput } from "./GuildsMembersWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GuildsMembersOrderByInput } from "./GuildsMembersOrderByInput";

@ArgsType()
class GuildsMembersFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GuildsMembersWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GuildsMembersWhereInput, { nullable: true })
  @Type(() => GuildsMembersWhereInput)
  where?: GuildsMembersWhereInput;

  @ApiProperty({
    required: false,
    type: [GuildsMembersOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GuildsMembersOrderByInput], { nullable: true })
  @Type(() => GuildsMembersOrderByInput)
  orderBy?: Array<GuildsMembersOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GuildsMembersFindManyArgs as GuildsMembersFindManyArgs };