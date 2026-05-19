import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateAudit = async (
  leadData,
  scrapedData
) => {

  try {

    const prompt = `
You are a senior business consultant, growth strategist, and conversion optimization expert.

Current Date:
${new Date().toLocaleDateString()}

Do not generate fictional or outdated dates.
Use only the provided current date in the report.

Analyze the following company and generate a highly personalized professional business audit report.

Company Name:
${leadData.company}

Website:
${leadData.website}

Business Goals:
${leadData.goals || "Not provided"}

Website Title:
${scrapedData.title || "N/A"}

Meta Description:
${scrapedData.metaDescription || "N/A"}

Website Headings:
${scrapedData.headings?.join(", ") || "N/A"}

Website Content Insights:
${scrapedData.paragraphs?.join(" ") || "N/A"}

Generate a detailed professional report with the following sections:

1. Executive Summary
2. Brand Positioning Analysis
3. SEO & Discoverability Analysis
4. User Experience Analysis
5. Conversion Optimization Suggestions
6. Growth Opportunities
7. Trust & Credibility Recommendations
8. Competitive Improvement Suggestions
9. Final Strategic Recommendations

The response should:
- sound professional and personalized
- provide actionable insights
- reference the company's industry and positioning
- be structured with clear sections
- feel like a premium consulting audit report
`;

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        model: "llama-3.1-8b-instant",
      });

    return completion.choices[0].message.content;

  } catch (error) {

    console.log(
      "AI audit generation failed"
    );

    return `
Executive Summary:
The company has a strong digital foundation but there are multiple opportunities to improve visibility, engagement, and conversion performance.

SEO Recommendations:
- Improve metadata optimization
- Enhance keyword targeting
- Improve page indexing structure

UX Recommendations:
- Improve mobile responsiveness
- Add stronger call-to-actions
- Improve visual hierarchy

Growth Opportunities:
- Build stronger lead funnels
- Improve conversion tracking
- Add trust-building content

Final Recommendation:
Focus on conversion optimization, SEO improvements, and stronger customer engagement strategies.
`;
  }
};

export default generateAudit;