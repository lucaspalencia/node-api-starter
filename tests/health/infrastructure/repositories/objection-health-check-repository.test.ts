import { expect } from "chai"

import { ObjectionHealthCheckRepository } from "#/health/infrastructure/repositories/objection-health-check-repository"

describe("ObjectionHealthCheckRepository", () => {
  it("check method", async () => {
    // given
    const expected = true
    const repository = new ObjectionHealthCheckRepository()

    // when
    const check = await repository.check()

    // then
    expect(check).to.be.equal(expected)
  })
})
