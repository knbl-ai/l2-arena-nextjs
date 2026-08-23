import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // eslint-config-next enables only a subset of the jsx-a11y rules. This site
    // carries a legal obligation to meet WCAG 2.1 AA, so take the full
    // recommended set and let static analysis catch what a runtime scan cannot.
    //
    // Only the rules are spread, not the whole flat config: eslint-config-next
    // has already registered the `jsx-a11y` plugin, and registering it twice is
    // a hard error.
    rules: { ...jsxA11y.flatConfigs.recommended.rules },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Throwaway verification scripts, not shipped.
    "scratch/**",
  ]),
]);

export default eslintConfig;
