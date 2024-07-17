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
import { UserGodsonService } from "../userGodson.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserGodsonCreateInput } from "./UserGodsonCreateInput";
import { UserGodson } from "./UserGodson";
import { UserGodsonFindManyArgs } from "./UserGodsonFindManyArgs";
import { UserGodsonWhereUniqueInput } from "./UserGodsonWhereUniqueInput";
import { UserGodsonUpdateInput } from "./UserGodsonUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserGodsonControllerBase {
  constructor(
    protected readonly service: UserGodsonService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserGodson })
  @nestAccessControl.UseRoles({
    resource: "UserGodson",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserGodsonCreateInput,
  })
  async createUserGodson(
    @common.Body() data: UserGodsonCreateInput
  ): Promise<UserGodson> {
    return await this.service.createUserGodson({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        relationshipDate: true,
        godfather: true,
        godson: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserGodson] })
  @ApiNestedQuery(UserGodsonFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserGodson",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userGodsons(@common.Req() request: Request): Promise<UserGodson[]> {
    const args = plainToClass(UserGodsonFindManyArgs, request.query);
    return this.service.userGodsons({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        relationshipDate: true,
        godfather: true,
        godson: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserGodson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserGodson",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userGodson(
    @common.Param() params: UserGodsonWhereUniqueInput
  ): Promise<UserGodson | null> {
    const result = await this.service.userGodson({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        relationshipDate: true,
        godfather: true,
        godson: true,
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
  @swagger.ApiOkResponse({ type: UserGodson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserGodson",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserGodsonUpdateInput,
  })
  async updateUserGodson(
    @common.Param() params: UserGodsonWhereUniqueInput,
    @common.Body() data: UserGodsonUpdateInput
  ): Promise<UserGodson | null> {
    try {
      return await this.service.updateUserGodson({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          relationshipDate: true,
          godfather: true,
          godson: true,
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
  @swagger.ApiOkResponse({ type: UserGodson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserGodson",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserGodson(
    @common.Param() params: UserGodsonWhereUniqueInput
  ): Promise<UserGodson | null> {
    try {
      return await this.service.deleteUserGodson({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          relationshipDate: true,
          godfather: true,
          godson: true,
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