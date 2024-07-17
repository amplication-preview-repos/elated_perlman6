import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionsPortugueseCoinsServiceBase } from "./base/transactionsPortugueseCoins.service.base";

@Injectable()
export class TransactionsPortugueseCoinsService extends TransactionsPortugueseCoinsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
