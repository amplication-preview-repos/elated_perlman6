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
import { GuildsCoinsWhereInput } from "./GuildsCoinsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GuildsCoinsOrderByInput } from "./GuildsCoinsOrderByInput";

@ArgsType()
class GuildsCoinsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GuildsCoinsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GuildsCoinsWhereInput, { nullable: true })
  @Type(() => GuildsCoinsWhereInput)
  where?: GuildsCoinsWhereInput;

  @ApiProperty({
    required: false,
    type: [GuildsCoinsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GuildsCoinsOrderByInput], { nullable: true })
  @Type(() => GuildsCoinsOrderByInput)
  orderBy?: Array<GuildsCoinsOrderByInput>;

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

export { GuildsCoinsFindManyArgs as GuildsCoinsFindManyArgs };
