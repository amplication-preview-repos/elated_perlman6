import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuildsCoinsModuleBase } from "./base/guildsCoins.module.base";
import { GuildsCoinsService } from "./guildsCoins.service";
import { GuildsCoinsController } from "./guildsCoins.controller";
import { GuildsCoinsResolver } from "./guildsCoins.resolver";

@Module({
  imports: [GuildsCoinsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuildsCoinsController],
  providers: [GuildsCoinsService, GuildsCoinsResolver],
  exports: [GuildsCoinsService],
})
export class GuildsCoinsModule {}
