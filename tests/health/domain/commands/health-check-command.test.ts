import sinon from "sinon"
import { expect } from "chai"

import { HealthCheckCommand } from "#/health/domain/commands/health-check-command"

describe("HealthCheckCommand", () => {
  it("should call onSuccess method", async () => {
    // given
    const command = new HealthCheckCommand()
    const onSuccessFn = sinon.spy()

    command.onSuccess = onSuccessFn

    // when
    await command.execute()

    // then
    expect(onSuccessFn.called).to.be.true
  })
})
