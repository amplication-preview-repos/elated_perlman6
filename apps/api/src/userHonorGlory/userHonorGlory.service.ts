import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserHonorGloryServiceBase } from "./base/userHonorGlory.service.base";

@Injectable()
export class UserHonorGloryService extends UserHonorGloryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
