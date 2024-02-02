module.exports = {
  extends: ['@etchteam/stylelint-config'],
  rules: {
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['starting-style'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['starting-style'],
      },
    ],
  },
};
