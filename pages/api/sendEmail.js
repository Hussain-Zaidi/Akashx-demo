// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      // Fetch recipients dynamically from the API
      const response = await fetch("http://64.227.101.114/api/akashx-home-pages");
      if (!response.ok) {
        throw new Error("Failed to fetch recipient emails");
      }

      const apiData = await response.json();
      const recipientsString = apiData?.data[0]?.email_address_to_get_mails;

      if (!recipientsString) {
        return res.status(400).json({ error: "No recipients found in the API response" });
      }

      // Convert the comma-separated string to an array of emails
      const recipients = recipientsString.split(",").map((email) => email.trim());

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // For Gmail SMTP
        port: 587, // Use 465 for SSL
        secure: false, // Use true for 465, false for other ports
        auth: {
          user: "mail.akashx@gmail.com", // Your SMTP email
          pass: "iblwvjnxxixyfwze", // Your SMTP password or app-specific password
        },
      });

      // Set up email data
      const mailOptions = {
        from: '"mail.akashx@gmail.com"', // Sender address
        to: recipients.join(", "), // Join multiple email addresses as a comma-separated string
        subject: "User Requested Demo", // Subject
        text: `A user with email ${email} requested a demo.`, // Plain text body
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hello,</p>
          
          <p>A user with email <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a> requested a demo.</p>

          <p>To open the AkashX website, please <a href="https://akashx.ai" style="color: #007BFF; text-decoration: none;">click here</a>!</p>
          <p>Best regards,<br/>AkashX Team</p>
        </div>
      `,
      };

      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
