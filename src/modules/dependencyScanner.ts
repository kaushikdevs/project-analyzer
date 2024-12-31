import * as fs from "fs/promises";

interface Dependency {
  name: string;
  version: string;
  link: string;
}

export async function dependencyScanner(): Promise<Dependency[]> {
  const packageJson = await fs.readFile("package.json", "utf-8");
  const { dependencies = {}, devDependencies = {} } = JSON.parse(packageJson);

  const mapToDependencies = (deps: Record<string, string>) =>
    Object.entries(deps).map(([name, version]) => ({
      name,
      version,
      link: `https://www.npmjs.com/package/${name}`,
    }));

  return [
    ...mapToDependencies(dependencies),
    ...mapToDependencies(devDependencies),
  ];
}
