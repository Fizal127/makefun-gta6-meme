// GTA 6 meme entry for make.fun bounty gta6-meme-x-01 (Node 22, stdlib only).
//
// The entry is the X post itself: a GTA 6 meme image posted on X from a public
// account, carrying make.fun (link or written out) and/or @makefunai plus one
// of the entrant's play codes. POST.json at this repository's root names that
// post. All this program has to do is hand POST.json to the grader: it copies
// POST.json from the repository (MAKEFUN_BOT_DIR, /bot in the grader) into the
// writable output directory (MAKEFUN_OUTPUT_DIR, /output in the grader).
// Nothing written here is judged; the house reads the post from X and hands
// its first picture and its text to the judge.
//
// The program is deterministic: same input files, same output bytes, every
// run. No network, no wall clock, no files outside the repository. A
// POST.json that still holds the starter's placeholder address copies fine
// but the gate refuses it (valid 0) — replace it with the real post's
// address (https://x.com/<handle>/status/<id>) before submitting.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

// Read first so a malformed POST.json fails loudly instead of silently
// copying a file the gate cannot read.
const parsed = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
