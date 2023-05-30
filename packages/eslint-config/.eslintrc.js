module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "sonarjs",
        "unicorn",
    ],
    "rules": {
        // Sonar js
        "sonarjs/no-useless-catch": "warn",
        "sonarjs/no-unused-collection": "warn",
        "sonarjs/no-collection-size-mischeck": "warn",
        "sonarjs/no-duplicated-branches": "warn",
        "sonarjs/no-same-line-conditional": "warn",
        "sonarjs/no-inverted-boolean-check": "error",
        "sonarjs/no-redundant-boolean": "warn",
        "sonarjs/prefer-single-boolean-return": "warn",
        "sonarjs/no-collapsible-if": "warn",

        // Unicorn
        "unicorn/filename-case": ["error", { "case": "kebabCase" }],

        // Another rules
        "no-duplicate-imports": ["error", { "includeExports": true }],
        "no-use-before-define": "off",
        "require-await": ["error"],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "arrow-body-style": ["warn", "as-needed"]
    }
}