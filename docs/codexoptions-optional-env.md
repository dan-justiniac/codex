# CodexOptions `env` overrides

The TypeScript SDK now accepts an optional `env?: NodeJS.ProcessEnv` field on `CodexOptions`.

- By default, providing `env` replaces the parent process environment (plus SDK-injected vars). Set `inheritParentEnv: true`
  to merge with `process.env` instead.
- In merge mode, values in `env` override the parent process and `undefined` removes a key.
- The SDK still injects its own required variables (`OPENAI_BASE_URL`, `CODEX_API_KEY`, `CODEX_INTERNAL_ORIGINATOR_OVERRIDE`).
- This enables multiple Codex instances in the same Node process to run with isolated homes/configs (e.g., different `CODEX_HOME` values) without mutating `process.env`.
