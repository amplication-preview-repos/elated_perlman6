import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserPortugueseGoldenCoinModuleBase } from "./base/userPortugueseGoldenCoin.module.base";
import { UserPortugueseGoldenCoinService } from "./userPortugueseGoldenCoin.service";
import { UserPortugueseGoldenCoinController } from "./userPortugueseGoldenCoin.controller";
import { UserPortugueseGoldenCoinResolver } from "./userPortugueseGoldenCoin.resolver";

@Module({
  imports: [UserPortugueseGoldenCoinModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserPortugueseGoldenCoinController],
  providers: [
    UserPortugueseGoldenCoinService,
    UserPortugueseGoldenCoinResolver,
  ],
  exports: [UserPortugueseGoldenCoinService],
})
export class UserPortugueseGoldenCoinModule {}
