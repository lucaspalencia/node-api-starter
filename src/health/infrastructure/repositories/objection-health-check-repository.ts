import { HealthCheckRepository } from "#/health/domain/repositories/health-check-repository"

export class ObjectionHealthCheckRepository extends HealthCheckRepository {
  public async check(): Promise<boolean> {
    return true
  }
}
