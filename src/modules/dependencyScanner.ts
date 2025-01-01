import * as fs from "fs/promises";

interface Dependency {
  name: string;
  version: string;
  link: string;
}

export async function dependencyScanner(): Promise<Dependency[]> {
  const packageJson = await fs.readFile("package.json", "utf-8");

  const data = JSON.parse(packageJson);

  return data;
}
