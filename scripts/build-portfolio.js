const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { verifyPortfolioBuild } = require("./verify-portfolio-build");

const repo = path.resolve(__dirname, "..");
const buildDir = path.join(repo, "build");
const docsDir = path.join(repo, "docs");

// Keep the Pages base path active through npm's postbuild route generation.
const result = spawnSync(process.execPath, [process.env.npm_execpath, "run", "build"], {
  cwd: repo,
  env: { ...process.env, PUBLIC_URL: "/PortfolioWebsite", BUILD_PATH: "build" },
  stdio: "inherit",
});
if (result.status !== 0) process.exit(result.status ?? 1);

verifyPortfolioBuild(buildDir);

// Only replace generated output in this checkout; refuse redirected directories.
for (const directory of [buildDir, docsDir]) {
  if (fs.realpathSync(directory) !== directory || path.dirname(directory) !== repo) {
    throw new Error(`Unsafe generated-output directory: ${directory}`);
  }
}
fs.rmSync(docsDir, { recursive: true });
fs.cpSync(buildDir, docsDir, { recursive: true });
verifyPortfolioBuild(docsDir);
console.log("Updated docs/ with the verified GitHub Pages portfolio build.");
