import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserOnboardingServiceBase } from "./base/userOnboarding.service.base";

@Injectable()
export class UserOnboardingService extends UserOnboardingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
