const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: "jest-environment-jsdom",
  preset: 'ts-jest'
};

module.exports = createJestConfig(config);