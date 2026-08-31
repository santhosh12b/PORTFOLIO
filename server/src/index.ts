import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, service, budget, description } = req.body;

    if (!name || !email || !service || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address (your authenticated email)
      to: process.env.CONTACT_EMAIL, // List of receivers (your email)
      replyTo: email, // Set Reply-To to the visitor's email
      subject: `New Freelance Inquiry — ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Service: ${service}
        Budget: ${budget || 'N/A'}
        
        Project Description:
        ${description}
        
        Submitted at: ${new Date().toISOString()}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Project request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send project request' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
