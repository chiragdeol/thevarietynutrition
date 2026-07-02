// Root-level entry point wrapper for Hostinger Node.js hosting.
// This resolves the absolute path of the Nitro server to prevent working directory issues.
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import(join(__dirname, '.output/server/index.mjs'));
