import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserGodsonModuleBase } from "./base/userGodson.module.base";
import { UserGodsonService } from "./userGodson.service";
import { UserGodsonController } from "./userGodson.controller";
import { UserGodsonResolver } from "./userGodson.resolver";

@Module({
  imports: [UserGodsonModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserGodsonController],
  providers: [UserGodsonService, UserGodsonResolver],
  exports: [UserGodsonService],
})
export class UserGodsonModule {}
