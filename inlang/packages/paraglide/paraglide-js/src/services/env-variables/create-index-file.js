/**
 * This script writes public environment variables
 * to an importable env file.
 *
 * - The SDK must bundle this file with the rest of the SDK
 * - This scripts avoids the need for a bundler
 * - Must be ran before building the SDK
 */

import fs from "node:fs/promises";
import url from "node:url";
import path from "node:path";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

const packageJson = JSON.parse(
	await fs.readFile(path.resolve(dirname, "../../../package.json"), "utf-8")
);

await fs.writeFile(
	dirname + "/index.ts",
	`
export const ENV_VARIABLES = {
  PARJS_APP_ID: "library.inlang.paraglideJs",
  PARJS_POSTHOG_TOKEN: ${ifDefined(process.env.PUBLIC_POSTHOG_TOKEN)},
	PARJS_PACKAGE_VERSION: ${ifDefined(packageJson.version)},
}
`
);

// console.log("✅ Created env variable index file.");

/**
 *
 * @param {string | undefined} value
 * @returns {string | undefined}
 */
function ifDefined(value) {
	return value ? `"${value}"` : undefined;
}
