import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuildsCoinsServiceBase } from "./base/guildsCoins.service.base";

@Injectable()
export class GuildsCoinsService extends GuildsCoinsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
