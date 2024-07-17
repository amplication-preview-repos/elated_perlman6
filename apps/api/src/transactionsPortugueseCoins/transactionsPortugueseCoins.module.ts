import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransactionsPortugueseCoinsModuleBase } from "./base/transactionsPortugueseCoins.module.base";
import { TransactionsPortugueseCoinsService } from "./transactionsPortugueseCoins.service";
import { TransactionsPortugueseCoinsController } from "./transactionsPortugueseCoins.controller";
import { TransactionsPortugueseCoinsResolver } from "./transactionsPortugueseCoins.resolver";

@Module({
  imports: [
    TransactionsPortugueseCoinsModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [TransactionsPortugueseCoinsController],
  providers: [
    TransactionsPortugueseCoinsService,
    TransactionsPortugueseCoinsResolver,
  ],
  exports: [TransactionsPortugueseCoinsService],
})
export class TransactionsPortugueseCoinsModule {}
