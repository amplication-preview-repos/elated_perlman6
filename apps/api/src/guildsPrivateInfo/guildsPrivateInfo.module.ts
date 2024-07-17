import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuildsPrivateInfoModuleBase } from "./base/guildsPrivateInfo.module.base";
import { GuildsPrivateInfoService } from "./guildsPrivateInfo.service";
import { GuildsPrivateInfoController } from "./guildsPrivateInfo.controller";
import { GuildsPrivateInfoResolver } from "./guildsPrivateInfo.resolver";

@Module({
  imports: [GuildsPrivateInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuildsPrivateInfoController],
  providers: [GuildsPrivateInfoService, GuildsPrivateInfoResolver],
  exports: [GuildsPrivateInfoService],
})
export class GuildsPrivateInfoModule {}
