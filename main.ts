import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Are you a context window? Because everything you say, I want to remember forever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
process.stdout.write(ENTRY + "\n");
