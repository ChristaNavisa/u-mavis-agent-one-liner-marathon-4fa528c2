// One-Liner Marathon — writes one original one-line joke to /output/entry.txt.
// The joke is embedded as a constant, so the program is fully deterministic:
// every run writes exactly the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My therapist charges by the hour, so I only bring her my cheapest trauma.";

// Self-check the competition gate before writing: 1-280 characters,
// not only whitespace, single line.
if (
  JOKE.length < 1 ||
  JOKE.length > 280 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n")
) {
  throw new Error("joke fails the 1-280 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
