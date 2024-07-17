import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransactionsHonorGloryModuleBase } from "./base/transactionsHonorGlory.module.base";
import { TransactionsHonorGloryService } from "./transactionsHonorGlory.service";
import { TransactionsHonorGloryController } from "./transactionsHonorGlory.controller";
import { TransactionsHonorGloryResolver } from "./transactionsHonorGlory.resolver";

@Module({
  imports: [TransactionsHonorGloryModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransactionsHonorGloryController],
  providers: [TransactionsHonorGloryService, TransactionsHonorGloryResolver],
  exports: [TransactionsHonorGloryService],
})
export class TransactionsHonorGloryModule {}
