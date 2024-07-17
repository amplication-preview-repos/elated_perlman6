import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserHonorGloryModuleBase } from "./base/userHonorGlory.module.base";
import { UserHonorGloryService } from "./userHonorGlory.service";
import { UserHonorGloryController } from "./userHonorGlory.controller";
import { UserHonorGloryResolver } from "./userHonorGlory.resolver";

@Module({
  imports: [UserHonorGloryModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserHonorGloryController],
  providers: [UserHonorGloryService, UserHonorGloryResolver],
  exports: [UserHonorGloryService],
})
export class UserHonorGloryModule {}
