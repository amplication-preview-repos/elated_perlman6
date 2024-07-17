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
import { TransactionsHonorGloryWhereUniqueInput } from "./TransactionsHonorGloryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class TransactionsHonorGloryFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => TransactionsHonorGloryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransactionsHonorGloryWhereUniqueInput)
  @Field(() => TransactionsHonorGloryWhereUniqueInput, { nullable: false })
  where!: TransactionsHonorGloryWhereUniqueInput;
}

export { TransactionsHonorGloryFindUniqueArgs as TransactionsHonorGloryFindUniqueArgs };