module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        semi: [2, 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'never'
        }],
        indent: ['error', 4],
        'react/prop-types': [0]
    }
};
