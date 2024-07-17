import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuildModuleBase } from "./base/guild.module.base";
import { GuildService } from "./guild.service";
import { GuildController } from "./guild.controller";
import { GuildResolver } from "./guild.resolver";

@Module({
  imports: [GuildModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuildController],
  providers: [GuildService, GuildResolver],
  exports: [GuildService],
})
export class GuildModule {}
