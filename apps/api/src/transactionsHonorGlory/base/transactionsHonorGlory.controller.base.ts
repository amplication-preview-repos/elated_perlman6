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
import { TransactionsHonorGloryService } from "../transactionsHonorGlory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TransactionsHonorGloryCreateInput } from "./TransactionsHonorGloryCreateInput";
import { TransactionsHonorGlory } from "./TransactionsHonorGlory";
import { TransactionsHonorGloryFindManyArgs } from "./TransactionsHonorGloryFindManyArgs";
import { TransactionsHonorGloryWhereUniqueInput } from "./TransactionsHonorGloryWhereUniqueInput";
import { TransactionsHonorGloryUpdateInput } from "./TransactionsHonorGloryUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TransactionsHonorGloryControllerBase {
  constructor(
    protected readonly service: TransactionsHonorGloryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TransactionsHonorGlory })
  @nestAccessControl.UseRoles({
    resource: "TransactionsHonorGlory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TransactionsHonorGloryCreateInput,
  })
  async createTransactionsHonorGlory(
    @common.Body() data: TransactionsHonorGloryCreateInput
  ): Promise<TransactionsHonorGlory> {
    return await this.service.createTransactionsHonorGlory({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        transactionType: true,
        amount: true,
        description: true,
        timestamp: true,
        receiveruser: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TransactionsHonorGlory] })
  @ApiNestedQuery(TransactionsHonorGloryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TransactionsHonorGlory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async transactionsHonorGlories(
    @common.Req() request: Request
  ): Promise<TransactionsHonorGlory[]> {
    const args = plainToClass(
      TransactionsHonorGloryFindManyArgs,
      request.query
    );
    return this.service.transactionsHonorGlories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        transactionType: true,
        amount: true,
        description: true,
        timestamp: true,
        receiveruser: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TransactionsHonorGlory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TransactionsHonorGlory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async transactionsHonorGlory(
    @common.Param() params: TransactionsHonorGloryWhereUniqueInput
  ): Promise<TransactionsHonorGlory | null> {
    const result = await this.service.transactionsHonorGlory({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        transactionType: true,
        amount: true,
        description: true,
        timestamp: true,
        receiveruser: true,
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
  @swagger.ApiOkResponse({ type: TransactionsHonorGlory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TransactionsHonorGlory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TransactionsHonorGloryUpdateInput,
  })
  async updateTransactionsHonorGlory(
    @common.Param() params: TransactionsHonorGloryWhereUniqueInput,
    @common.Body() data: TransactionsHonorGloryUpdateInput
  ): Promise<TransactionsHonorGlory | null> {
    try {
      return await this.service.updateTransactionsHonorGlory({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          transactionType: true,
          amount: true,
          description: true,
          timestamp: true,
          receiveruser: true,
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
  @swagger.ApiOkResponse({ type: TransactionsHonorGlory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TransactionsHonorGlory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTransactionsHonorGlory(
    @common.Param() params: TransactionsHonorGloryWhereUniqueInput
  ): Promise<TransactionsHonorGlory | null> {
    try {
      return await this.service.deleteTransactionsHonorGlory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          transactionType: true,
          amount: true,
          description: true,
          timestamp: true,
          receiveruser: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/SenderUser")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findSenderUser(
    @common.Req() request: Request,
    @common.Param() params: TransactionsHonorGloryWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findSenderUser(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/SenderUser")
  @nestAccessControl.UseRoles({
    resource: "TransactionsHonorGlory",
    action: "update",
    possession: "any",
  })
  async connectSenderUser(
    @common.Param() params: TransactionsHonorGloryWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      SenderUser: {
        connect: body,
      },
    };
    await this.service.updateTransactionsHonorGlory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/SenderUser")
  @nestAccessControl.UseRoles({
    resource: "TransactionsHonorGlory",
    action: "update",
    possession: "any",
  })
  async updateSenderUser(
    @common.Param() params: TransactionsHonorGloryWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      SenderUser: {
        set: body,
      },
    };
    await this.service.updateTransactionsHonorGlory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/SenderUser")
  @nestAccessControl.UseRoles({
    resource: "TransactionsHonorGlory",
    action: "update",
    possession: "any",
  })
  async disconnectSenderUser(
    @common.Param() params: TransactionsHonorGloryWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      SenderUser: {
        disconnect: body,
      },
    };
    await this.service.updateTransactionsHonorGlory({
      where: params,
      data,
      select: { id: true },
    });
  }
}