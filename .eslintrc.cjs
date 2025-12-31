// .eslintrc.cjs
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
  ],
};
