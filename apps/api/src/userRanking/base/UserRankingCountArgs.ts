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
import { Type } from "class-transformer";

@ArgsType()
class UserRankingCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserRankingWhereInput,
  })
  @Field(() => UserRankingWhereInput, { nullable: true })
  @Type(() => UserRankingWhereInput)
  where?: UserRankingWhereInput;
}

export { UserRankingCountArgs as UserRankingCountArgs };
