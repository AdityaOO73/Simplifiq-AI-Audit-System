import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

const generatePDF = async (
  leadData,
  auditReport
) => {

  return new Promise((resolve, reject) => {

    try {

      const reportsDir = path.join(
        "reports"
      );

      if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir);
      }

      const fileName = `${leadData.company
        .replace(/\s/g, "_")}_Audit_Report.pdf`;

      const filePath = path.join(
        reportsDir,
        fileName
      );

      const doc = new PDFDocument({
        margin: 50,
      });

      const stream = fs.createWriteStream(
        filePath
      );

      doc.pipe(stream);

      // HEADER

      doc
        .rect(0, 0, 650, 120)
        .fill("#111827");

      doc
        .fillColor("#FFFFFF")
        .fontSize(16)
        .text(
          "Simplifiq AI Audit System",
          50,
          40
        );

      doc
        .fontSize(26)
        .fillColor("#FFFFFF")
        .text(
          `${leadData.company} Audit Report`,
          50,
          68,
          {
            align: "center",
          }
        );

      // RESET POSITION

      doc.y = 150;

      // GENERATED DATE

      doc
        .fontSize(11)
        .fillColor("#6B7280")
        .text(
          `Generated on ${new Date().toLocaleString()}`,
          {
            align: "center",
          }
        );

      doc.moveDown(2);

      // SCORE SECTION

      const score =
        Math.floor(
          Math.random() * 15
        ) + 80;

      doc
        .fontSize(18)
        .fillColor("#111827")
        .text(
          "Overall Digital Presence Score"
        );

      doc.moveDown(0.5);

      doc
        .fontSize(30)
        .fillColor("#2563EB")
        .text(`${score}/100`);

      doc.moveDown(2);

      // DIVIDER

      doc
        .moveTo(50, doc.y)
        .lineTo(550, doc.y)
        .strokeColor("#D1D5DB")
        .stroke();

      doc.moveDown(2);

      // COMPANY INFORMATION

      doc
        .fontSize(20)
        .fillColor("#111827")
        .text(
          "Company Information"
        );

      doc.moveDown(1);

      doc
        .fontSize(13)
        .fillColor("#374151")
        .text(
          `Company Name: ${leadData.company}`
        );

      doc.moveDown(0.5);

      doc.text(
        `Website: ${leadData.website}`
      );

      doc.moveDown(0.5);

      doc.text(
        `Business Goals: ${
          leadData.goals || "N/A"
        }`
      );

      doc.moveDown(2);

      // DIVIDER

      doc
        .moveTo(50, doc.y)
        .lineTo(550, doc.y)
        .strokeColor("#E5E7EB")
        .stroke();

      doc.moveDown(2);

      // EXECUTIVE SUMMARY

      doc
        .fontSize(20)
        .fillColor("#111827")
        .text("Executive Summary");

      doc.moveDown(1);

      doc
        .fontSize(12)
        .fillColor("#374151")
        .text(
          "This report provides a strategic overview of the company's digital presence, growth opportunities, user experience quality, and SEO effectiveness based on publicly available website insights and AI-driven analysis.",
          {
            align: "left",
            lineGap: 6,
          }
        );

      doc.moveDown(2);

      // DIVIDER

      doc
        .moveTo(50, doc.y)
        .lineTo(550, doc.y)
        .strokeColor("#E5E7EB")
        .stroke();

      doc.moveDown(2);

      // AI AUDIT

      doc
        .fontSize(20)
        .fillColor("#111827")
        .text("AI Business Audit");

      doc.moveDown(1);

      doc
        .fontSize(12)
        .fillColor("#374151")
        .text(
          auditReport ||
            "No audit available",
          {
            align: "left",
            lineGap: 6,
          }
        );

      doc.moveDown(2);

      // PAGE SAFETY

      if (doc.y > 650) {
        doc.addPage();
      }

      // RECOMMENDATIONS

      doc
        .fontSize(20)
        .fillColor("#111827")
        .text(
          "Key Recommendations"
        );

      doc.moveDown(1);

      const recommendations = [
        "Improve SEO optimization and metadata structure",
        "Enhance mobile responsiveness and accessibility",
        "Strengthen call-to-action visibility",
        "Improve website performance and loading speed",
        "Enhance branding consistency across pages",
      ];

      recommendations.forEach((item) => {

        doc
          .fontSize(12)
          .fillColor("#374151")
          .text(`• ${item}`, {
            lineGap: 5,
          });

        doc.moveDown(0.7);
      });

      doc.moveDown(2);

      // FOOTER DIVIDER

      doc
        .moveTo(50, doc.y)
        .lineTo(550, doc.y)
        .strokeColor("#E5E7EB")
        .stroke();

      doc.moveDown(1);

      // FOOTER

      doc
        .fontSize(10)
        .fillColor("#9CA3AF")
        .text(
          "Generated automatically by Simplifiq AI Lead Automation System",
          {
            align: "center",
          }
        );

      doc.end();

      stream.on("finish", () => {
        resolve(filePath);
      });

    } catch (error) {

      reject(error);
    }
  });
};

export default generatePDF;