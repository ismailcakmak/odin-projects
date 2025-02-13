module.exports = {
    rootDir: "../", // Go back to the project root
    transform: {
      "^.+\\.js$": ["babel-jest", { configFile: "./config/babel.config.json" }]
    },
    testMatch: ["<rootDir>/src/**/*.test.js"], // Ensure Jest finds tests inside `src/`
};
  