import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final: the cat knocked the phone off the shelf, so the voicemail is
// now the cat's. Shelf-knocking joke, first-person cat voice, and the
// punch ("Leave food, not feelings") lands in the last four words.
// Stronger than the warm-phone draft: the voicemail framing is explicit
// ("this is my voicemail now") and the joke explains why a cat is
// recording a greeting at all.
const LINE =
  "You've reached my human's phone. I knocked it off the shelf, so this is my voicemail now. Leave food, not feelings.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const line = LINE;
  if (line.length < 1 || line.length > 120) {
    console.error(`entry must be 1-120 characters, got ${line.length}`);
    process.exit(1);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    console.error("entry must be a single non-blank line");
    process.exit(1);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote ${line.length} characters to entry.txt`);
}

main();
