import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GuildsPrivateInfoServiceBase } from "./base/guildsPrivateInfo.service.base";

@Injectable()
export class GuildsPrivateInfoService extends GuildsPrivateInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
