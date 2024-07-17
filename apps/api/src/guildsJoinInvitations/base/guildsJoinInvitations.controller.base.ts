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
import { GuildsJoinInvitationsService } from "../guildsJoinInvitations.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GuildsJoinInvitationsCreateInput } from "./GuildsJoinInvitationsCreateInput";
import { GuildsJoinInvitations } from "./GuildsJoinInvitations";
import { GuildsJoinInvitationsFindManyArgs } from "./GuildsJoinInvitationsFindManyArgs";
import { GuildsJoinInvitationsWhereUniqueInput } from "./GuildsJoinInvitationsWhereUniqueInput";
import { GuildsJoinInvitationsUpdateInput } from "./GuildsJoinInvitationsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GuildsJoinInvitationsControllerBase {
  constructor(
    protected readonly service: GuildsJoinInvitationsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GuildsJoinInvitations })
  @nestAccessControl.UseRoles({
    resource: "GuildsJoinInvitations",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GuildsJoinInvitationsCreateInput,
  })
  async createGuildsJoinInvitations(
    @common.Body() data: GuildsJoinInvitationsCreateInput
  ): Promise<GuildsJoinInvitations> {
    return await this.service.createGuildsJoinInvitations({
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
        sentAt: true,
        responseAt: true,
        status: true,

        guild: {
          select: {
            id: true,
          },
        },

        inviterUserId: true,
        inviteeUserEmail: true,
        inviteeUserId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GuildsJoinInvitations] })
  @ApiNestedQuery(GuildsJoinInvitationsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GuildsJoinInvitations",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async guildsJoinInvitationsItems(
    @common.Req() request: Request
  ): Promise<GuildsJoinInvitations[]> {
    const args = plainToClass(GuildsJoinInvitationsFindManyArgs, request.query);
    return this.service.guildsJoinInvitationsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sentAt: true,
        responseAt: true,
        status: true,

        guild: {
          select: {
            id: true,
          },
        },

        inviterUserId: true,
        inviteeUserEmail: true,
        inviteeUserId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GuildsJoinInvitations })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildsJoinInvitations",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async guildsJoinInvitations(
    @common.Param() params: GuildsJoinInvitationsWhereUniqueInput
  ): Promise<GuildsJoinInvitations | null> {
    const result = await this.service.guildsJoinInvitations({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sentAt: true,
        responseAt: true,
        status: true,

        guild: {
          select: {
            id: true,
          },
        },

        inviterUserId: true,
        inviteeUserEmail: true,
        inviteeUserId: true,
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
  @swagger.ApiOkResponse({ type: GuildsJoinInvitations })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildsJoinInvitations",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GuildsJoinInvitationsUpdateInput,
  })
  async updateGuildsJoinInvitations(
    @common.Param() params: GuildsJoinInvitationsWhereUniqueInput,
    @common.Body() data: GuildsJoinInvitationsUpdateInput
  ): Promise<GuildsJoinInvitations | null> {
    try {
      return await this.service.updateGuildsJoinInvitations({
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
          sentAt: true,
          responseAt: true,
          status: true,

          guild: {
            select: {
              id: true,
            },
          },

          inviterUserId: true,
          inviteeUserEmail: true,
          inviteeUserId: true,
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
  @swagger.ApiOkResponse({ type: GuildsJoinInvitations })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildsJoinInvitations",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGuildsJoinInvitations(
    @common.Param() params: GuildsJoinInvitationsWhereUniqueInput
  ): Promise<GuildsJoinInvitations | null> {
    try {
      return await this.service.deleteGuildsJoinInvitations({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sentAt: true,
          responseAt: true,
          status: true,

          guild: {
            select: {
              id: true,
            },
          },

          inviterUserId: true,
          inviteeUserEmail: true,
          inviteeUserId: true,
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