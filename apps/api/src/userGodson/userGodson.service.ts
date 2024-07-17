import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserGodsonServiceBase } from "./base/userGodson.service.base";

@Injectable()
export class UserGodsonService extends UserGodsonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
