export class HealthCheck {
  public constructor(
    public readonly status: number,
    public readonly date: Date,
  ) {}
}
