import fs from 'node:fs';
import path from 'node:path';

const filePath = path.resolve('node_modules/nf3/dist/_chunks/trace.mjs');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('import { nodeFileTrace } from "@vercel/nft";')) {
    content = content.replace(
      'import { nodeFileTrace } from "@vercel/nft";',
      'import nft from "@vercel/nft";\nconst { nodeFileTrace } = nft;'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully patched nf3/dist/_chunks/trace.mjs for ESM compatibility.');
  } else {
    console.log('nf3 trace.mjs is already patched or format differs.');
  }
} else {
  console.log('nf3 trace.mjs not found.');
}
