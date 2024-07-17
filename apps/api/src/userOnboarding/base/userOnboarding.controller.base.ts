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
import { UserOnboardingService } from "../userOnboarding.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserOnboardingCreateInput } from "./UserOnboardingCreateInput";
import { UserOnboarding } from "./UserOnboarding";
import { UserOnboardingFindManyArgs } from "./UserOnboardingFindManyArgs";
import { UserOnboardingWhereUniqueInput } from "./UserOnboardingWhereUniqueInput";
import { UserOnboardingUpdateInput } from "./UserOnboardingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserOnboardingControllerBase {
  constructor(
    protected readonly service: UserOnboardingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserOnboarding })
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserOnboardingCreateInput,
  })
  async createUserOnboarding(
    @common.Body() data: UserOnboardingCreateInput
  ): Promise<UserOnboarding> {
    return await this.service.createUserOnboarding({
      data: {
        ...data,

        user_id: data.user_id
          ? {
              connect: data.user_id,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        step: true,
        completed: true,
        date: true,

        user_id: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserOnboarding] })
  @ApiNestedQuery(UserOnboardingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userOnboardings(
    @common.Req() request: Request
  ): Promise<UserOnboarding[]> {
    const args = plainToClass(UserOnboardingFindManyArgs, request.query);
    return this.service.userOnboardings({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        step: true,
        completed: true,
        date: true,

        user_id: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserOnboarding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userOnboarding(
    @common.Param() params: UserOnboardingWhereUniqueInput
  ): Promise<UserOnboarding | null> {
    const result = await this.service.userOnboarding({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        step: true,
        completed: true,
        date: true,

        user_id: {
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
  @swagger.ApiOkResponse({ type: UserOnboarding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserOnboardingUpdateInput,
  })
  async updateUserOnboarding(
    @common.Param() params: UserOnboardingWhereUniqueInput,
    @common.Body() data: UserOnboardingUpdateInput
  ): Promise<UserOnboarding | null> {
    try {
      return await this.service.updateUserOnboarding({
        where: params,
        data: {
          ...data,

          user_id: data.user_id
            ? {
                connect: data.user_id,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          step: true,
          completed: true,
          date: true,

          user_id: {
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
  @swagger.ApiOkResponse({ type: UserOnboarding })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserOnboarding(
    @common.Param() params: UserOnboardingWhereUniqueInput
  ): Promise<UserOnboarding | null> {
    try {
      return await this.service.deleteUserOnboarding({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          step: true,
          completed: true,
          date: true,

          user_id: {
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