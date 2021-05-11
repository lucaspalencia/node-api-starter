import assert from "assert"

export const getEnvOrDefault = (envName: string, defaultValue: string): string => process.env[envName] ?? defaultValue

export const getEnvOrThrow = (envName: string): string => {
  const env = process.env[envName]
  assert(env, `Missing environment variable ${envName}`)
  return env
}

export const ENVIRONMENT = getEnvOrDefault("ENVIRONMENT", "local")
