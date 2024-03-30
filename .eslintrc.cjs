module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
    },
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'quotes': ['error', 'single'],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-trailing-spaces": "error",
    "semi": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "react-hooks/exhaustive-deps": "off"
  },
}
