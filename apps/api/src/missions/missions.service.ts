import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MissionsServiceBase } from "./base/missions.service.base";

@Injectable()
export class MissionsService extends MissionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
