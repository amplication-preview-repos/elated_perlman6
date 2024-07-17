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
import { TransactionsPortugueseCoins } from "./TransactionsPortugueseCoins";
import { TransactionsPortugueseCoinsCountArgs } from "./TransactionsPortugueseCoinsCountArgs";
import { TransactionsPortugueseCoinsFindManyArgs } from "./TransactionsPortugueseCoinsFindManyArgs";
import { TransactionsPortugueseCoinsFindUniqueArgs } from "./TransactionsPortugueseCoinsFindUniqueArgs";
import { CreateTransactionsPortugueseCoinsArgs } from "./CreateTransactionsPortugueseCoinsArgs";
import { UpdateTransactionsPortugueseCoinsArgs } from "./UpdateTransactionsPortugueseCoinsArgs";
import { DeleteTransactionsPortugueseCoinsArgs } from "./DeleteTransactionsPortugueseCoinsArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { TransactionsPortugueseCoinsService } from "../transactionsPortugueseCoins.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TransactionsPortugueseCoins)
export class TransactionsPortugueseCoinsResolverBase {
  constructor(
    protected readonly service: TransactionsPortugueseCoinsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TransactionsPortugueseCoins",
    action: "read",
    possession: "any",
  })
  async _transactionsPortugueseCoinsItemsMeta(
    @graphql.Args() args: TransactionsPortugueseCoinsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TransactionsPortugueseCoins])
  @nestAccessControl.UseRoles({
    resource: "TransactionsPortugueseCoins",
    action: "read",
    possession: "any",
  })
  async transactionsPortugueseCoinsItems(
    @graphql.Args() args: TransactionsPortugueseCoinsFindManyArgs
  ): Promise<TransactionsPortugueseCoins[]> {
    return this.service.transactionsPortugueseCoinsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TransactionsPortugueseCoins, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TransactionsPortugueseCoins",
    action: "read",
    possession: "own",
  })
  async transactionsPortugueseCoins(
    @graphql.Args() args: TransactionsPortugueseCoinsFindUniqueArgs
  ): Promise<TransactionsPortugueseCoins | null> {
    const result = await this.service.transactionsPortugueseCoins(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TransactionsPortugueseCoins)
  @nestAccessControl.UseRoles({
    resource: "TransactionsPortugueseCoins",
    action: "create",
    possession: "any",
  })
  async createTransactionsPortugueseCoins(
    @graphql.Args() args: CreateTransactionsPortugueseCoinsArgs
  ): Promise<TransactionsPortugueseCoins> {
    return await this.service.createTransactionsPortugueseCoins({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TransactionsPortugueseCoins)
  @nestAccessControl.UseRoles({
    resource: "TransactionsPortugueseCoins",
    action: "update",
    possession: "any",
  })
  async updateTransactionsPortugueseCoins(
    @graphql.Args() args: UpdateTransactionsPortugueseCoinsArgs
  ): Promise<TransactionsPortugueseCoins | null> {
    try {
      return await this.service.updateTransactionsPortugueseCoins({
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

  @graphql.Mutation(() => TransactionsPortugueseCoins)
  @nestAccessControl.UseRoles({
    resource: "TransactionsPortugueseCoins",
    action: "delete",
    possession: "any",
  })
  async deleteTransactionsPortugueseCoins(
    @graphql.Args() args: DeleteTransactionsPortugueseCoinsArgs
  ): Promise<TransactionsPortugueseCoins | null> {
    try {
      return await this.service.deleteTransactionsPortugueseCoins(args);
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
  @graphql.ResolveField(() => [User], { name: "receivedUser" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findReceivedUser(
    @graphql.Parent() parent: TransactionsPortugueseCoins,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findReceivedUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}