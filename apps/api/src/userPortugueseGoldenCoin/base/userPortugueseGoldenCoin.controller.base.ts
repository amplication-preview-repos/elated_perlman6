/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserPortugueseGoldenCoinService } from "../userPortugueseGoldenCoin.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserPortugueseGoldenCoinCreateInput } from "./UserPortugueseGoldenCoinCreateInput";
import { UserPortugueseGoldenCoin } from "./UserPortugueseGoldenCoin";
import { UserPortugueseGoldenCoinFindManyArgs } from "./UserPortugueseGoldenCoinFindManyArgs";
import { UserPortugueseGoldenCoinWhereUniqueInput } from "./UserPortugueseGoldenCoinWhereUniqueInput";
import { UserPortugueseGoldenCoinUpdateInput } from "./UserPortugueseGoldenCoinUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserPortugueseGoldenCoinControllerBase {
  constructor(
    protected readonly service: UserPortugueseGoldenCoinService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserPortugueseGoldenCoin })
  @nestAccessControl.UseRoles({
    resource: "UserPortugueseGoldenCoin",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserPortugueseGoldenCoinCreateInput,
  })
  async createUserPortugueseGoldenCoin(
    @common.Body() data: UserPortugueseGoldenCoinCreateInput
  ): Promise<UserPortugueseGoldenCoin> {
    return await this.service.createUserPortugueseGoldenCoin({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        coins: true,
        userId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserPortugueseGoldenCoin] })
  @ApiNestedQuery(UserPortugueseGoldenCoinFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserPortugueseGoldenCoin",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userPortugueseGoldenCoins(
    @common.Req() request: Request
  ): Promise<UserPortugueseGoldenCoin[]> {
    const args = plainToClass(
      UserPortugueseGoldenCoinFindManyArgs,
      request.query
    );
    return this.service.userPortugueseGoldenCoins({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        coins: true,
        userId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserPortugueseGoldenCoin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserPortugueseGoldenCoin",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userPortugueseGoldenCoin(
    @common.Param() params: UserPortugueseGoldenCoinWhereUniqueInput
  ): Promise<UserPortugueseGoldenCoin | null> {
    const result = await this.service.userPortugueseGoldenCoin({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        coins: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserPortugueseGoldenCoin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserPortugueseGoldenCoin",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserPortugueseGoldenCoinUpdateInput,
  })
  async updateUserPortugueseGoldenCoin(
    @common.Param() params: UserPortugueseGoldenCoinWhereUniqueInput,
    @common.Body() data: UserPortugueseGoldenCoinUpdateInput
  ): Promise<UserPortugueseGoldenCoin | null> {
    try {
      return await this.service.updateUserPortugueseGoldenCoin({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          coins: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserPortugueseGoldenCoin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserPortugueseGoldenCoin",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserPortugueseGoldenCoin(
    @common.Param() params: UserPortugueseGoldenCoinWhereUniqueInput
  ): Promise<UserPortugueseGoldenCoin | null> {
    try {
      return await this.service.deleteUserPortugueseGoldenCoin({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          coins: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}