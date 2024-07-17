import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserGodsonService } from "./userGodson.service";
import { UserGodsonControllerBase } from "./base/userGodson.controller.base";

@swagger.ApiTags("userGodsons")
@common.Controller("userGodsons")
export class UserGodsonController extends UserGodsonControllerBase {
  constructor(
    protected readonly service: UserGodsonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
