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
import { MissionsService } from "../missions.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MissionsCreateInput } from "./MissionsCreateInput";
import { Missions } from "./Missions";
import { MissionsFindManyArgs } from "./MissionsFindManyArgs";
import { MissionsWhereUniqueInput } from "./MissionsWhereUniqueInput";
import { MissionsUpdateInput } from "./MissionsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MissionsControllerBase {
  constructor(
    protected readonly service: MissionsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Missions })
  @nestAccessControl.UseRoles({
    resource: "Missions",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MissionsCreateInput,
  })
  async createMissions(
    @common.Body() data: MissionsCreateInput
  ): Promise<Missions> {
    return await this.service.createMissions({
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
        description: true,
        status: true,
        dueDate: true,
        title: true,

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
  @swagger.ApiOkResponse({ type: [Missions] })
  @ApiNestedQuery(MissionsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Missions",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async missionsItems(@common.Req() request: Request): Promise<Missions[]> {
    const args = plainToClass(MissionsFindManyArgs, request.query);
    return this.service.missionsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        status: true,
        dueDate: true,
        title: true,

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
  @swagger.ApiOkResponse({ type: Missions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Missions",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async missions(
    @common.Param() params: MissionsWhereUniqueInput
  ): Promise<Missions | null> {
    const result = await this.service.missions({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        status: true,
        dueDate: true,
        title: true,

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
  @swagger.ApiOkResponse({ type: Missions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Missions",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MissionsUpdateInput,
  })
  async updateMissions(
    @common.Param() params: MissionsWhereUniqueInput,
    @common.Body() data: MissionsUpdateInput
  ): Promise<Missions | null> {
    try {
      return await this.service.updateMissions({
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
          description: true,
          status: true,
          dueDate: true,
          title: true,

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
  @swagger.ApiOkResponse({ type: Missions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Missions",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMissions(
    @common.Param() params: MissionsWhereUniqueInput
  ): Promise<Missions | null> {
    try {
      return await this.service.deleteMissions({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          status: true,
          dueDate: true,
          title: true,

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
