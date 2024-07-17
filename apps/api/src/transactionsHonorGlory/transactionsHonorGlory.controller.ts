import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransactionsHonorGloryService } from "./transactionsHonorGlory.service";
import { TransactionsHonorGloryControllerBase } from "./base/transactionsHonorGlory.controller.base";

@swagger.ApiTags("transactionsHonorGlories")
@common.Controller("transactionsHonorGlories")
export class TransactionsHonorGloryController extends TransactionsHonorGloryControllerBase {
  constructor(
    protected readonly service: TransactionsHonorGloryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
