const jestConfig = {
  preset: 'jest-preset-angular/presets/defaults-esm',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      useESM: true,
    },
  },
  globalSetup: 'jest-preset-angular/global-setup.mjs',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    rxjs: '<rootDir>../../node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },
  transformIgnorePatterns: ['node_modules/(?!tslib)'],
};

export default jestConfig;