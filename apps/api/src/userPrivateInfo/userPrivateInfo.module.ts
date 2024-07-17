import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserPrivateInfoModuleBase } from "./base/userPrivateInfo.module.base";
import { UserPrivateInfoService } from "./userPrivateInfo.service";
import { UserPrivateInfoController } from "./userPrivateInfo.controller";
import { UserPrivateInfoResolver } from "./userPrivateInfo.resolver";

@Module({
  imports: [UserPrivateInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserPrivateInfoController],
  providers: [UserPrivateInfoService, UserPrivateInfoResolver],
  exports: [UserPrivateInfoService],
})
export class UserPrivateInfoModule {}
