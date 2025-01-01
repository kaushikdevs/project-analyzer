import PDFDocument from "pdfkit";
import * as fs from "fs";

export async function pdfGenerator(data: any): Promise<void> {
  const doc = new PDFDocument({
    margins: { top: 50, bottom: 50, left: 50, right: 50 },
    size: "A4",
  });

  // Stream to file
  doc.pipe(fs.createWriteStream("report.pdf"));

  // Add a header
  doc
    .fontSize(26)
    .fillColor("#333333")
    .text(data.name(data.version), { align: "center" });

  doc
    .moveDown()
    .fontSize(14)
    .fillColor("#555555")
    .text("Generated on: " + new Date().toLocaleDateString(), {
      align: "right",
    });

  doc.moveDown(2);

  // Add table headers
  doc
    .fontSize(16)
    .fillColor("#000000")
    .text("Dependencies", { underline: true });

  doc.moveDown();

  const dependencies = Object.entries(data.dependencies).map(
    ([name, version]) => ({
      name,
      version,
      link: `https://www.npmjs.com/package/${name}`,
    })
  );

  // Create table layout for dependencies
  dependencies.forEach((dep, index) => {
    doc
      .fontSize(12)
      .fillColor("#333333")
      .text(`${index + 1}. ${dep.name} (${dep.version})`, {
        continued: true,
      })
      .fillColor("#0000FF")
      .text(`  [Link]`, {
        link: dep.link,
        underline: true,
      });

    doc.moveDown(0.5);
  });

  doc.moveDown(2);

  doc
    .fontSize(16)
    .fillColor("#000000")
    .text("DevDependencies", { underline: true });

  doc.moveDown();

  const devDependencies = Object.entries(data.devDependencies).map(
    ([name, version]) => ({
      name,
      version,
      link: `https://www.npmjs.com/package/${name}`,
    })
  );

  // Create table layout for dependencies
  devDependencies.forEach((dep, index) => {
    doc
      .fontSize(12)
      .fillColor("#333333")
      .text(`${index + 1}. ${dep.name} (${dep.version})`, {
        continued: true,
      })
      .fillColor("#0000FF")
      .text(`  [Link]`, {
        link: dep.link,
        underline: true,
      });

    doc.moveDown(0.5);
  });

  // Footer
  doc.moveTo(50, 750).lineTo(550, 750).strokeColor("#AAAAAA").stroke();

  doc
    .fontSize(10)
    .fillColor("#AAAAAA")
    .text("Generated using Projalyze", 50, 760, {
      align: "center",
    });

  // Finalize PDF
  doc.end();
}
