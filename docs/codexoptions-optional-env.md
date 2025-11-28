# CodexOptions `env` overrides

The TypeScript SDK now accepts an optional `env?: NodeJS.ProcessEnv` field on `CodexOptions`.

- The child `codex` process inherits `process.env` and overlays the supplied `env` object:

  ```ts
  {
    ...process.env,
    ...options.env,
  }
  ```

- Values in `env` override the parent process. Set a key to `undefined` to remove it from the spawned process.
- The SDK still injects its own required variables (`OPENAI_BASE_URL`, `CODEX_API_KEY`, `CODEX_INTERNAL_ORIGINATOR_OVERRIDE`).
- This enables multiple Codex instances in the same Node process to run with isolated homes/configs (e.g., different `CODEX_HOME` values) without mutating `process.env`.
