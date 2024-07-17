import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuildsMembersServiceBase } from "./base/guildsMembers.service.base";

@Injectable()
export class GuildsMembersService extends GuildsMembersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
