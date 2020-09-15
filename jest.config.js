module.exports = {
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
    "^.+\\ts$": "ts-jest"
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // coverageDirectory: '<rootDir>/src/test/coverage',
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'src/lib/*.vue',
  //   'src/lib/hooks/*.ts',
  // ],
  // snapshotSerializers: [
  //   "jest-serializer-vue"
  // ]
}