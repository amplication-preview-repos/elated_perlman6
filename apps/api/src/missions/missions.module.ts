import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MissionsModuleBase } from "./base/missions.module.base";
import { MissionsService } from "./missions.service";
import { MissionsController } from "./missions.controller";
import { MissionsResolver } from "./missions.resolver";

@Module({
  imports: [MissionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MissionsController],
  providers: [MissionsService, MissionsResolver],
  exports: [MissionsService],
})
export class MissionsModule {}
