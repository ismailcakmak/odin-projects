module.exports = {
    rootDir: "../", // Go back to the project root
    transform: {
      "^.+\\.js$": ["babel-jest", { configFile: "./config/babel.config.js" }]
    },
    testMatch: ["<rootDir>/src/**/*.test.js"], // Ensure Jest finds tests inside `src/`
};
  