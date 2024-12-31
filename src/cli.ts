#!/usr/bin/env node
import { dependencyScanner } from "./modules/dependencyScanner";
// import { cssAnalyzer } from "./modules/cssAnalyzer";
// import { bugTracker } from "./modules/bugTracker";
// import { stabilityChecker } from "./modules/stabilityChecker";
import { pdfGenerator } from "./modules/pdfGenerator";

(async () => {
  try {
    console.log("Starting project analysis...");

    const dependencies = await dependencyScanner();
    // const cssClasses = await cssAnalyzer();
    // const bugs = await bugTracker();
    // const stability = stabilityChecker();

    // await pdfGenerator(dependencies, cssClasses, bugs, stability);
    await pdfGenerator(dependencies);

    console.log("PDF report generated successfully!");
  } catch (err) {
    console.error("Error during analysis:", err);
  }
})();
