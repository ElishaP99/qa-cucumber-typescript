module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['step-definitions/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: ['progress'],
  },
};