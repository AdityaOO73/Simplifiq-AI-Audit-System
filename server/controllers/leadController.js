import Lead from "../models/Lead.js";

import generatePDF from "../services/generatePDF.js";
import scrapeWebsite from "../services/scrapeWebsite.js";
import generateAudit from "../services/generateAudit.js";
import sendEmail from "../services/sendEmail.js";

export const createLead = async (req, res) => {

  const startTime = Date.now();

  try {

    const {
      name,
      email,
      company,
      website,
      goals,
    } = req.body;

    // VALIDATION

    if (!name || !email || !company || !website) {

      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // SAVE LEAD

    const lead = await Lead.create({
      name,
      email,
      company,
      website,
      goals,
      reportStatus: "processing",
    });

    console.log("Lead saved");

    // SCRAPE WEBSITE

    let scrapedData = {};

    try {

      scrapedData = await scrapeWebsite(
        website
      );

      console.log("Website scraping completed");

    } catch (error) {

      console.log("Website scraping failed");

      scrapedData = {
        title: "Unavailable",
        metaDescription: "Unavailable",
        headings: [],
      };
    }

    // GENERATE AI AUDIT

    let auditReport = "";

    try {

      auditReport = await generateAudit(
        lead,
        scrapedData
      );

      console.log("AI audit generated");

    } catch (error) {

      console.log("AI audit generation failed");

      auditReport =
        "Professional Business Recommendations:\n\n" +
        "1. Improve SEO optimization\n" +
        "2. Enhance mobile responsiveness\n" +
        "3. Add stronger call-to-actions\n" +
        "4. Improve branding consistency\n" +
        "5. Optimize website performance";
    }

    // GENERATE PDF

    let pdfPath = "";

    try {

      pdfPath = await generatePDF(
        lead,
        auditReport
      );

      console.log("PDF generated");

    } catch (error) {

      console.log("PDF generation failed");
    }

    // SAVE GENERATED DATA

    lead.scrapedData = scrapedData;

    lead.auditReport = auditReport;

    lead.pdfPath = pdfPath;

    // SEND EMAIL

    try {

      await sendEmail(
        lead.email,
        lead.company,
        pdfPath
      );

      lead.reportStatus = "completed";

      console.log("Email sent");

    } catch (error) {

      lead.reportStatus = "email_failed";

      console.log("Email sending failed");
    }

    await lead.save();

    // WORKFLOW COMPLETED

    const endTime = Date.now();

    console.log(
      `Workflow completed in ${
        endTime - startTime
      }ms`
    );

    // RESPONSE

    res.status(201).json({
      success: true,
      message:
        "Lead processed and audit report generated successfully",
    });

  } catch (error) {

    console.log("Server error");

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};