// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme whose first picture is
// meme.png in this repository, posted from a public account with make.fun
// and our play code in its text. POST.json at this repository's root holds
// the post's address, and this program's whole job is to hand that file to
// the grader by writing it to the output directory. Nothing written here
// is judged; the house reads the post from X itself.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postJson = readFileSync(join(botDir, 'POST.json'));

// Fail loudly instead of handing the grader a file that is not a JSON
// object naming a post: the placeholder parses fine, a real post address
// does too, anything else should stop here rather than at the gate.
const parsed: unknown = JSON.parse(postJson.toString('utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  throw new Error('POST.json must be a JSON object with a string "url" field');
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), postJson);
