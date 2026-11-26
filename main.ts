import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2 final (revisi dari draft): "phone" -> "voicemail" di kalimat pembuka.
// Draft hanya mengandalkan framing "You've reached..." untuk kriteria 1,
// sementara v1 menyebut kata "voicemail" secara eksplisit. Revisi ini
// menutup celah itu (+4 karakter, 105 -> 109) tanpa mengorbankan punch.
const LINE =
  "You've reached my human's voicemail. I'm the cat, I knocked it off the shelf. I only answer to a can opening.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`LINE must be 1-120 chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("LINE must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
