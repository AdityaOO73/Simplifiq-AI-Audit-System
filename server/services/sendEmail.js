import nodemailer from "nodemailer";

const sendEmail = async (
  to,
  company,
  pdfPath
) => {

  try {

    const transporter =
      nodemailer.createTransport({

        host: "smtp-relay.brevo.com",

       port: 2525,

        secure: false,

        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    const mailOptions = {

      from: `"Simplifiq AI Audit System" <${process.env.EMAIL_USER}>`,

      to,

      subject:
        `${company} Business Audit Report`,

      text:
`Hello,

Thank you for submitting your company details.

Attached is your personalized AI-generated business audit report containing strategic insights, SEO recommendations, growth opportunities, and conversion improvement suggestions tailored specifically to your business.

We appreciate the opportunity to analyze your digital presence and provide actionable recommendations.

Best Regards,
Simplifiq Team`,

      attachments: [
        {
          filename:
            `${company}-Audit-Report.pdf`,

          path: pdfPath,
        },
      ],
    };

    await transporter.sendMail(
      mailOptions
    );

    console.log("Email sent");

  } catch (error) {

    console.log(
      "Email sending failed"
    );

    console.log(error);
  }
};

export default sendEmail;