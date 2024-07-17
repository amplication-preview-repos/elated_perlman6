import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuildsMembersModuleBase } from "./base/guildsMembers.module.base";
import { GuildsMembersService } from "./guildsMembers.service";
import { GuildsMembersController } from "./guildsMembers.controller";
import { GuildsMembersResolver } from "./guildsMembers.resolver";

@Module({
  imports: [GuildsMembersModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuildsMembersController],
  providers: [GuildsMembersService, GuildsMembersResolver],
  exports: [GuildsMembersService],
})
export class GuildsMembersModule {}
