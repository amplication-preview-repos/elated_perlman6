import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserRankingServiceBase } from "./base/userRanking.service.base";

@Injectable()
export class UserRankingService extends UserRankingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
