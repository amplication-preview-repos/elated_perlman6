import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserInvitationsServiceBase } from "./base/userInvitations.service.base";

@Injectable()
export class UserInvitationsService extends UserInvitationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
