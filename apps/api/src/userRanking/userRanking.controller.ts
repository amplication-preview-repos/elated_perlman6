import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserRankingService } from "./userRanking.service";
import { UserRankingControllerBase } from "./base/userRanking.controller.base";

@swagger.ApiTags("userRankings")
@common.Controller("userRankings")
export class UserRankingController extends UserRankingControllerBase {
  constructor(
    protected readonly service: UserRankingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
