import { noop } from "#/lib/typescript/noop"
import { HealthCheck } from "#/health/domain/entities/health-check"
import { HealthCheckCommand } from "#/health/domain/commands/health-check-command"

export class HealthCheckCommandStub extends HealthCheckCommand {
  private callback = noop

  public async execute(): Promise<void> {
    await this.callback()
  }

  public withSuccess(healthCheck: HealthCheck): HealthCheckCommandStub {
    this.callback = async (): Promise<void> => {
      await this.onSuccess(healthCheck)
    }

    return this
  }
}
