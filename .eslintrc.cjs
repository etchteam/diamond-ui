module.exports = {
  plugins: ['lit-a11y'],
  extends: [
    '@etchteam',
    'plugin:lit-a11y/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
      },
    ],
  },
};
