import PDFDocument from "pdfkit";
import * as fs from "fs";

interface Dependency {
  name: string;
  version: string;
  link: string;
}

interface Bug {
  file: string;
  message: string;
  line: number;
}

export async function pdfGenerator(
  dependencies: Dependency[]
  // cssClasses: string[],
  // bugs: Bug[],
  // stability: string
): Promise<void> {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("ProjectReport.pdf"));

  doc.fontSize(20).text("Project Report", { align: "center" });
  doc.fontSize(14).text("\nDependencies:");
  dependencies.forEach((dep) =>
    doc.text(`${dep.name} (${dep.version}): ${dep.link}`)
  );

  // doc.text("\nCSS Classes:");
  // cssClasses.forEach((cls) => doc.text(cls));

  // doc.text("\nBugs:");
  // bugs.forEach((bug) =>
  //   doc.text(`File: ${bug.file}, Line: ${bug.line}, Issue: ${bug.message}`)
  // );

  // doc.text("\nStability:");
  // doc.text(stability);

  doc.end();
}
