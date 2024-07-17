import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuildsJoinInvitationsServiceBase } from "./base/guildsJoinInvitations.service.base";

@Injectable()
export class GuildsJoinInvitationsService extends GuildsJoinInvitationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
