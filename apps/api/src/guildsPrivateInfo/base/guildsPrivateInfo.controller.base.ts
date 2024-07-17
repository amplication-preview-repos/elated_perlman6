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
import { GuildsPrivateInfoService } from "../guildsPrivateInfo.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GuildsPrivateInfoCreateInput } from "./GuildsPrivateInfoCreateInput";
import { GuildsPrivateInfo } from "./GuildsPrivateInfo";
import { GuildsPrivateInfoFindManyArgs } from "./GuildsPrivateInfoFindManyArgs";
import { GuildsPrivateInfoWhereUniqueInput } from "./GuildsPrivateInfoWhereUniqueInput";
import { GuildsPrivateInfoUpdateInput } from "./GuildsPrivateInfoUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GuildsPrivateInfoControllerBase {
  constructor(
    protected readonly service: GuildsPrivateInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GuildsPrivateInfo })
  @nestAccessControl.UseRoles({
    resource: "GuildsPrivateInfo",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GuildsPrivateInfoCreateInput,
  })
  async createGuildsPrivateInfo(
    @common.Body() data: GuildsPrivateInfoCreateInput
  ): Promise<GuildsPrivateInfo> {
    return await this.service.createGuildsPrivateInfo({
      data: {
        ...data,

        guild: data.guild
          ? {
              connect: data.guild,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastUpdated: true,
        billing_address: true,

        guild: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GuildsPrivateInfo] })
  @ApiNestedQuery(GuildsPrivateInfoFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GuildsPrivateInfo",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async guildsPrivateInfos(
    @common.Req() request: Request
  ): Promise<GuildsPrivateInfo[]> {
    const args = plainToClass(GuildsPrivateInfoFindManyArgs, request.query);
    return this.service.guildsPrivateInfos({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastUpdated: true,
        billing_address: true,

        guild: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GuildsPrivateInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildsPrivateInfo",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async guildsPrivateInfo(
    @common.Param() params: GuildsPrivateInfoWhereUniqueInput
  ): Promise<GuildsPrivateInfo | null> {
    const result = await this.service.guildsPrivateInfo({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastUpdated: true,
        billing_address: true,

        guild: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: GuildsPrivateInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildsPrivateInfo",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GuildsPrivateInfoUpdateInput,
  })
  async updateGuildsPrivateInfo(
    @common.Param() params: GuildsPrivateInfoWhereUniqueInput,
    @common.Body() data: GuildsPrivateInfoUpdateInput
  ): Promise<GuildsPrivateInfo | null> {
    try {
      return await this.service.updateGuildsPrivateInfo({
        where: params,
        data: {
          ...data,

          guild: data.guild
            ? {
                connect: data.guild,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          lastUpdated: true,
          billing_address: true,

          guild: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: GuildsPrivateInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildsPrivateInfo",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGuildsPrivateInfo(
    @common.Param() params: GuildsPrivateInfoWhereUniqueInput
  ): Promise<GuildsPrivateInfo | null> {
    try {
      return await this.service.deleteGuildsPrivateInfo({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          lastUpdated: true,
          billing_address: true,

          guild: {
            select: {
              id: true,
            },
          },
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
