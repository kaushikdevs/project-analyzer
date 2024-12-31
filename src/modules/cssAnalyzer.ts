import * as fs from "fs/promises";
import * as path from "path";

export async function cssAnalyzer(): Promise<string[]> {
  const cssDir = path.resolve("src/styles");
  try {
    const files = await fs.readdir(cssDir);
    const cssClasses: string[] = [];

    for (const file of files) {
      if (file.endsWith(".css")) {
        const content = await fs.readFile(path.join(cssDir, file), "utf-8");
        const matches = content.match(/\.[a-zA-Z0-9-_]+/g) || [];
        cssClasses.push(...matches.map((cls) => cls.slice(1))); // Remove leading '.'
      }
    }

    return cssClasses;
  } catch {
    return [];
  }
}
