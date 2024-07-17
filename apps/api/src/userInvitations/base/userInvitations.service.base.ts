/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  UserInvitations as PrismaUserInvitations,
} from "@prisma/client";

export class UserInvitationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserInvitationsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userInvitations.count(args);
  }

  async userInvitationsItems(
    args: Prisma.UserInvitationsFindManyArgs
  ): Promise<PrismaUserInvitations[]> {
    return this.prisma.userInvitations.findMany(args);
  }
  async userInvitations(
    args: Prisma.UserInvitationsFindUniqueArgs
  ): Promise<PrismaUserInvitations | null> {
    return this.prisma.userInvitations.findUnique(args);
  }
  async createUserInvitations(
    args: Prisma.UserInvitationsCreateArgs
  ): Promise<PrismaUserInvitations> {
    return this.prisma.userInvitations.create(args);
  }
  async updateUserInvitations(
    args: Prisma.UserInvitationsUpdateArgs
  ): Promise<PrismaUserInvitations> {
    return this.prisma.userInvitations.update(args);
  }
  async deleteUserInvitations(
    args: Prisma.UserInvitationsDeleteArgs
  ): Promise<PrismaUserInvitations> {
    return this.prisma.userInvitations.delete(args);
  }
}
