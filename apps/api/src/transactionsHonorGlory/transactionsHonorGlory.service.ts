import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionsHonorGloryServiceBase } from "./base/transactionsHonorGlory.service.base";

@Injectable()
export class TransactionsHonorGloryService extends TransactionsHonorGloryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
