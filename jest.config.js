module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/jest.config.js"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  collectCoverage: true,
  coverageReporters: ["html", "text-summary"],
  coverageDirectory: "coverage/test",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
}
