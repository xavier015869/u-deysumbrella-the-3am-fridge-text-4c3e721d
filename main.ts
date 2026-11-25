import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3am. You again. The light's on, the leftovers are scared, and the ice cream asked me to tell you it's not a coping mechanism.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only whitespace, and a single line. Refuse to write anything invalid.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
