export type CodexOptions = {
  codexPathOverride?: string;
  baseUrl?: string;
  apiKey?: string;
  /**
   * Environment variables merged into the Codex CLI process environment.
   * Values here override `process.env`; omit or set a key to `undefined` to remove it.
   */
  env?: NodeJS.ProcessEnv;
};
