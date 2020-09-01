module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-typescript/base'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
        "class-methods-use-this": "off",
        "no-param-reassign": "off",
        "camelcase": "off",
        'no-console': 'off',
        "consistent-return": "off",
        "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
        "import/prefer-default-export": "off",
        "func-names": "off"

    },
};
