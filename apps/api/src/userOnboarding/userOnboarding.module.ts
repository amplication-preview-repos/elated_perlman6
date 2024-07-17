import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserOnboardingModuleBase } from "./base/userOnboarding.module.base";
import { UserOnboardingService } from "./userOnboarding.service";
import { UserOnboardingController } from "./userOnboarding.controller";
import { UserOnboardingResolver } from "./userOnboarding.resolver";

@Module({
  imports: [UserOnboardingModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserOnboardingController],
  providers: [UserOnboardingService, UserOnboardingResolver],
  exports: [UserOnboardingService],
})
export class UserOnboardingModule {}
