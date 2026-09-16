module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['src/step-definitions/**/*.ts'],
    paths: ['src/features/**/*.feature'],
    format: ['progress'],
  },
};