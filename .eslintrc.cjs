module.exports = {
  plugins: ['lit-a11y', 'spellcheck'],
  extends: ['@etchteam', 'plugin:lit-a11y/recommended'],
  rules: {
    'spellcheck/spell-checker': [
      'warn',
      {
        lang: 'en_GB',
        skipWords: [
          'namespace',
          'etchteam',
          'plugins',
          'lang',
          'var',
          'th',
          'td',
          'color',
          'nowrap',
          'center',
        ],
      },
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
      },
    ],
  },
};
