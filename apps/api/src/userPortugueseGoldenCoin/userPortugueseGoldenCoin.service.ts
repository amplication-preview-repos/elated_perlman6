import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPortugueseGoldenCoinServiceBase } from "./base/userPortugueseGoldenCoin.service.base";

@Injectable()
export class UserPortugueseGoldenCoinService extends UserPortugueseGoldenCoinServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
