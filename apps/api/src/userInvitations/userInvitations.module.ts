import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserInvitationsModuleBase } from "./base/userInvitations.module.base";
import { UserInvitationsService } from "./userInvitations.service";
import { UserInvitationsController } from "./userInvitations.controller";
import { UserInvitationsResolver } from "./userInvitations.resolver";

@Module({
  imports: [UserInvitationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserInvitationsController],
  providers: [UserInvitationsService, UserInvitationsResolver],
  exports: [UserInvitationsService],
})
export class UserInvitationsModule {}
