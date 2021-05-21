import { Container } from "inversify"

import { HealthCheckCommand } from "#/health/domain/commands/health-check-command"
import { HealthCheckController } from "#/health/infrastructure/controllers/health-check-controller"

const diContainer = new Container()

diContainer.bind(HealthCheckCommand).toSelf()
diContainer.bind(HealthCheckController).toSelf()

export { diContainer }
