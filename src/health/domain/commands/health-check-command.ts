import { injectable } from "inversify"
import { StatusCodes } from "http-status-codes"

import { noop } from "#/lib/typescript/noop"
import { HealthCheck } from "#/health/domain/entities/health-check"

@injectable()
export class HealthCheckCommand {
  public onSuccess: (healthCheck: HealthCheck) => Promise<void> = noop

  public async execute(): Promise<void> {
    const healthCheck = new HealthCheck(StatusCodes.OK, new Date())

    return this.onSuccess(healthCheck)
  }
}
