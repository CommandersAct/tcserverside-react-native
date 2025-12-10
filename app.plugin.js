const { createRunOncePlugin } = require("@expo/config-plugins");

const pkg = require("../package.json");

const withTCServerSidePlugin = (config) => {
  return config;
};

module.exports = createRunOncePlugin(
  withTCServerSidePlugin,
  pkg.name,
  pkg.version
)
