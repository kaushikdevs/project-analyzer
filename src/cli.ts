#!/usr/bin/env node
import { dependencyScanner } from "./modules/dependencyScanner";
import { pdfGenerator } from "./modules/pdfGenerator";

(async () => {
  try {
    console.log("Starting project analysis...");

    const dependencies = await dependencyScanner();
    await pdfGenerator(dependencies);

    console.log("PDF report generated successfully!");
  } catch (err) {
    console.error("Error during analysis:", err);
  }
})();
