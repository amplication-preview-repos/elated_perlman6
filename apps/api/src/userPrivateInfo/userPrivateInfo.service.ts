import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPrivateInfoServiceBase } from "./base/userPrivateInfo.service.base";

@Injectable()
export class UserPrivateInfoService extends UserPrivateInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
