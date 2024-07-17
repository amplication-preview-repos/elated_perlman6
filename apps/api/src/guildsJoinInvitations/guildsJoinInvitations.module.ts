import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GuildsJoinInvitationsModuleBase } from "./base/guildsJoinInvitations.module.base";
import { GuildsJoinInvitationsService } from "./guildsJoinInvitations.service";
import { GuildsJoinInvitationsController } from "./guildsJoinInvitations.controller";
import { GuildsJoinInvitationsResolver } from "./guildsJoinInvitations.resolver";

@Module({
  imports: [GuildsJoinInvitationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GuildsJoinInvitationsController],
  providers: [GuildsJoinInvitationsService, GuildsJoinInvitationsResolver],
  exports: [GuildsJoinInvitationsService],
})
export class GuildsJoinInvitationsModule {}
