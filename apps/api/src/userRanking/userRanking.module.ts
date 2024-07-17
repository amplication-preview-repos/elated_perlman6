import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserRankingModuleBase } from "./base/userRanking.module.base";
import { UserRankingService } from "./userRanking.service";
import { UserRankingController } from "./userRanking.controller";
import { UserRankingResolver } from "./userRanking.resolver";

@Module({
  imports: [UserRankingModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserRankingController],
  providers: [UserRankingService, UserRankingResolver],
  exports: [UserRankingService],
})
export class UserRankingModule {}
