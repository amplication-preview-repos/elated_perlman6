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
import { UserOnboarding } from "./UserOnboarding";
import { UserOnboardingCountArgs } from "./UserOnboardingCountArgs";
import { UserOnboardingFindManyArgs } from "./UserOnboardingFindManyArgs";
import { UserOnboardingFindUniqueArgs } from "./UserOnboardingFindUniqueArgs";
import { CreateUserOnboardingArgs } from "./CreateUserOnboardingArgs";
import { UpdateUserOnboardingArgs } from "./UpdateUserOnboardingArgs";
import { DeleteUserOnboardingArgs } from "./DeleteUserOnboardingArgs";
import { User } from "../../user/base/User";
import { UserOnboardingService } from "../userOnboarding.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserOnboarding)
export class UserOnboardingResolverBase {
  constructor(
    protected readonly service: UserOnboardingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "read",
    possession: "any",
  })
  async _userOnboardingsMeta(
    @graphql.Args() args: UserOnboardingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserOnboarding])
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "read",
    possession: "any",
  })
  async userOnboardings(
    @graphql.Args() args: UserOnboardingFindManyArgs
  ): Promise<UserOnboarding[]> {
    return this.service.userOnboardings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserOnboarding, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "read",
    possession: "own",
  })
  async userOnboarding(
    @graphql.Args() args: UserOnboardingFindUniqueArgs
  ): Promise<UserOnboarding | null> {
    const result = await this.service.userOnboarding(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserOnboarding)
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "create",
    possession: "any",
  })
  async createUserOnboarding(
    @graphql.Args() args: CreateUserOnboardingArgs
  ): Promise<UserOnboarding> {
    return await this.service.createUserOnboarding({
      ...args,
      data: {
        ...args.data,

        user_id: args.data.user_id
          ? {
              connect: args.data.user_id,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserOnboarding)
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "update",
    possession: "any",
  })
  async updateUserOnboarding(
    @graphql.Args() args: UpdateUserOnboardingArgs
  ): Promise<UserOnboarding | null> {
    try {
      return await this.service.updateUserOnboarding({
        ...args,
        data: {
          ...args.data,

          user_id: args.data.user_id
            ? {
                connect: args.data.user_id,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => UserOnboarding)
  @nestAccessControl.UseRoles({
    resource: "UserOnboarding",
    action: "delete",
    possession: "any",
  })
  async deleteUserOnboarding(
    @graphql.Args() args: DeleteUserOnboardingArgs
  ): Promise<UserOnboarding | null> {
    try {
      return await this.service.deleteUserOnboarding(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "userId",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUserId(
    @graphql.Parent() parent: UserOnboarding
  ): Promise<User | null> {
    const result = await this.service.getUserId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}