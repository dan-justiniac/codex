export type CodexOptions = {
  codexPathOverride?: string;
  baseUrl?: string;
  apiKey?: string;
  /**
   * Environment variables for the Codex CLI process. By default, when provided, the
   * parent process environment is NOT inherited; only these values (plus SDK-injected
   * ones) are passed through.
   * Set `inheritParentEnv: true` to merge with `process.env`. Keys with `undefined`
   * are removed in merge mode.
   */
  env?: NodeJS.ProcessEnv;
  /**
   * When true, merge `process.env` before applying `env`. Defaults to false to
   * preserve the previous “no inheritance when env is supplied” contract.
   */
  inheritParentEnv?: boolean;
};
