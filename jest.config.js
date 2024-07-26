module.exports = {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    transformIgnorePatterns: [
      "node_modules/(?!axios)"
    ],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
  