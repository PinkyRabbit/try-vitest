// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import vitest from '@vitest/eslint-plugin';

export default withNuxt({
    plugins: {
        vitest: vitest
    },
    rules: {
        'semi': ['error', 'always'],
        'vitest/expect-expect': 'error',
        'vitest/no-disabled-tests': 'warn',
        'vitest/no-focused-tests': 'error',
        'vitest/no-identical-title': 'error'
    }
});
