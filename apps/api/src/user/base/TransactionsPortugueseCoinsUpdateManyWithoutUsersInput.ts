/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TransactionsPortugueseCoinsWhereUniqueInput } from "../../transactionsPortugueseCoins/base/TransactionsPortugueseCoinsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TransactionsPortugueseCoinsUpdateManyWithoutUsersInput {
  @Field(() => [TransactionsPortugueseCoinsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransactionsPortugueseCoinsWhereUniqueInput],
  })
  connect?: Array<TransactionsPortugueseCoinsWhereUniqueInput>;

  @Field(() => [TransactionsPortugueseCoinsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransactionsPortugueseCoinsWhereUniqueInput],
  })
  disconnect?: Array<TransactionsPortugueseCoinsWhereUniqueInput>;

  @Field(() => [TransactionsPortugueseCoinsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TransactionsPortugueseCoinsWhereUniqueInput],
  })
  set?: Array<TransactionsPortugueseCoinsWhereUniqueInput>;
}

export { TransactionsPortugueseCoinsUpdateManyWithoutUsersInput as TransactionsPortugueseCoinsUpdateManyWithoutUsersInput };