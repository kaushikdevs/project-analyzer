import { ESLint } from "eslint";

export async function bugTracker() {
  const eslint = new ESLint();
  const results = await eslint.lintFiles(["src/**/*.ts"]);

  return results.flatMap((result) =>
    result.messages.map((msg) => ({
      file: result.filePath,
      message: msg.message,
      line: msg.line || 0,
    }))
  );
}
