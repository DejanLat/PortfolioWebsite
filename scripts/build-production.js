const { spawnSync } = require("node:child_process");

require("./sync-studio-package-static");

process.env.GENERATE_SOURCEMAP = "false";

const cracoBin = require.resolve("@craco/craco/dist/bin/craco");
const result = spawnSync(process.execPath, [cracoBin, "build"], {
  env: process.env,
  stdio: "inherit",
});

process.exit(result.status ?? 1);