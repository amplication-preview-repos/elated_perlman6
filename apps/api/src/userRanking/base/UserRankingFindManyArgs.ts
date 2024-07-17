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
import { UserRankingWhereInput } from "./UserRankingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserRankingOrderByInput } from "./UserRankingOrderByInput";

@ArgsType()
class UserRankingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserRankingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserRankingWhereInput, { nullable: true })
  @Type(() => UserRankingWhereInput)
  where?: UserRankingWhereInput;

  @ApiProperty({
    required: false,
    type: [UserRankingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserRankingOrderByInput], { nullable: true })
  @Type(() => UserRankingOrderByInput)
  orderBy?: Array<UserRankingOrderByInput>;

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

export { UserRankingFindManyArgs as UserRankingFindManyArgs };
