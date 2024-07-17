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
import { TransactionsHonorGloryUpdateInput } from "./TransactionsHonorGloryUpdateInput";

@ArgsType()
class UpdateTransactionsHonorGloryArgs {
  @ApiProperty({
    required: true,
    type: () => TransactionsHonorGloryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransactionsHonorGloryWhereUniqueInput)
  @Field(() => TransactionsHonorGloryWhereUniqueInput, { nullable: false })
  where!: TransactionsHonorGloryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TransactionsHonorGloryUpdateInput,
  })
  @ValidateNested()
  @Type(() => TransactionsHonorGloryUpdateInput)
  @Field(() => TransactionsHonorGloryUpdateInput, { nullable: false })
  data!: TransactionsHonorGloryUpdateInput;
}

export { UpdateTransactionsHonorGloryArgs as UpdateTransactionsHonorGloryArgs };
