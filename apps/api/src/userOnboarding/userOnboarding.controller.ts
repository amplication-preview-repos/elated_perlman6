import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserOnboardingService } from "./userOnboarding.service";
import { UserOnboardingControllerBase } from "./base/userOnboarding.controller.base";

@swagger.ApiTags("userOnboardings")
@common.Controller("userOnboardings")
export class UserOnboardingController extends UserOnboardingControllerBase {
  constructor(
    protected readonly service: UserOnboardingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
