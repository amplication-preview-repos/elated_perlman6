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
import { UserGodsonWhereInput } from "./UserGodsonWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserGodsonListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserGodsonWhereInput,
  })
  @ValidateNested()
  @Type(() => UserGodsonWhereInput)
  @IsOptional()
  @Field(() => UserGodsonWhereInput, {
    nullable: true,
  })
  every?: UserGodsonWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserGodsonWhereInput,
  })
  @ValidateNested()
  @Type(() => UserGodsonWhereInput)
  @IsOptional()
  @Field(() => UserGodsonWhereInput, {
    nullable: true,
  })
  some?: UserGodsonWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserGodsonWhereInput,
  })
  @ValidateNested()
  @Type(() => UserGodsonWhereInput)
  @IsOptional()
  @Field(() => UserGodsonWhereInput, {
    nullable: true,
  })
  none?: UserGodsonWhereInput;
}
export { UserGodsonListRelationFilter as UserGodsonListRelationFilter };