/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserHonorGlory } from "./UserHonorGlory";
import { UserHonorGloryCountArgs } from "./UserHonorGloryCountArgs";
import { UserHonorGloryFindManyArgs } from "./UserHonorGloryFindManyArgs";
import { UserHonorGloryFindUniqueArgs } from "./UserHonorGloryFindUniqueArgs";
import { CreateUserHonorGloryArgs } from "./CreateUserHonorGloryArgs";
import { UpdateUserHonorGloryArgs } from "./UpdateUserHonorGloryArgs";
import { DeleteUserHonorGloryArgs } from "./DeleteUserHonorGloryArgs";
import { UserHonorGloryService } from "../userHonorGlory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserHonorGlory)
export class UserHonorGloryResolverBase {
  constructor(
    protected readonly service: UserHonorGloryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserHonorGlory",
    action: "read",
    possession: "any",
  })
  async _userHonorGloriesMeta(
    @graphql.Args() args: UserHonorGloryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserHonorGlory])
  @nestAccessControl.UseRoles({
    resource: "UserHonorGlory",
    action: "read",
    possession: "any",
  })
  async userHonorGlories(
    @graphql.Args() args: UserHonorGloryFindManyArgs
  ): Promise<UserHonorGlory[]> {
    return this.service.userHonorGlories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserHonorGlory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserHonorGlory",
    action: "read",
    possession: "own",
  })
  async userHonorGlory(
    @graphql.Args() args: UserHonorGloryFindUniqueArgs
  ): Promise<UserHonorGlory | null> {
    const result = await this.service.userHonorGlory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserHonorGlory)
  @nestAccessControl.UseRoles({
    resource: "UserHonorGlory",
    action: "create",
    possession: "any",
  })
  async createUserHonorGlory(
    @graphql.Args() args: CreateUserHonorGloryArgs
  ): Promise<UserHonorGlory> {
    return await this.service.createUserHonorGlory({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserHonorGlory)
  @nestAccessControl.UseRoles({
    resource: "UserHonorGlory",
    action: "update",
    possession: "any",
  })
  async updateUserHonorGlory(
    @graphql.Args() args: UpdateUserHonorGloryArgs
  ): Promise<UserHonorGlory | null> {
    try {
      return await this.service.updateUserHonorGlory({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserHonorGlory)
  @nestAccessControl.UseRoles({
    resource: "UserHonorGlory",
    action: "delete",
    possession: "any",
  })
  async deleteUserHonorGlory(
    @graphql.Args() args: DeleteUserHonorGloryArgs
  ): Promise<UserHonorGlory | null> {
    try {
      return await this.service.deleteUserHonorGlory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
