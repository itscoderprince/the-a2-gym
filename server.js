import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, interest, message } = req.body;

    // Validate inputs
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: `"The A2 Gym Website" <${process.env.EMAIL_USER}>`,
            to: 'thea2gym.in@gmail.com',
            replyTo: email,
            subject: `🔥 [Leads] New Performance Inquiry: ${firstName}`,
            text: `New Contact Form Submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; padding: 0; margin: 0; -webkit-font-smoothing: antialiased; }
                        .container { max-width: 600px; margin: 0 auto; background-color: #000000; border: 1px solid #1a1a1a; }
                        .header { background-color: #000000; padding: 20px 30px; border-bottom: 1px solid #111111; }
                        .content { padding: 25px 30px; background-color: #080808; }
                        .footer { padding: 20px; text-align: center; background-color: #000000; font-size: 10px; color: #444444; border-top: 1px solid #111111; letter-spacing: 0.5px; }
                        .label { color: #DA0B2E; font-weight: 800; text-transform: uppercase; font-size: 10px; letter-spacing: 2px; margin-bottom: 4px; margin-top: 15px; }
                        .value { font-size: 16px; color: #ffffff; font-weight: 400; padding-bottom: 5px; margin-bottom: 10px; border-bottom: 1px solid #151515; }
                        .value a { color: #ffffff !important; text-decoration: none; border-bottom: 1px solid #DA0B2E; }
                        .message-box { background-color: #000000; padding: 15px 20px; border-left: 2px solid #DA0B2E; margin-top: 10px; color: #bbbbbb; line-height: 1.6; font-size: 14px; }
                        .logo { width: 80px; height: auto; display: block; }
                        .btn { display: inline-block; padding: 12px 30px; background-color: #DA0B2E; color: #ffffff !important; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; font-size: 11px; margin-top: 25px; border-radius: 0px; }
                        h2 { margin: 0; color: #ffffff; font-size: 18px; text-transform: uppercase; letter-spacing: -0.5px; font-weight: 900; }
                        .subtitle { color: #555555; font-size: 9px; text-transform: uppercase; letter-spacing: 2px; font-weight: 500; margin-bottom: 2px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="left" valign="middle">
                                        <img src="cid:gymlogo" class="logo" alt="The A2 Gym">
                                    </td>
                                    <td align="right" valign="middle">
                                        <div class="subtitle">Website Inquiry</div>
                                        <h2>Nagra Toli Lead</h2>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="content">
                            <div class="label">Full Name</div>
                            <div class="value">${firstName} ${lastName}</div>
                            
                            <div class="label">Email Address</div>
                            <div class="value"><a href="mailto:${email}">${email}</a></div>
                            
                            <div class="label">Interest Level</div>
                            <div class="value">${interest}</div>
                            
                            <div class="label">Athlete's Message</div>
                            <div class="message-box">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                            
                            <div style="text-align: center;">
                                <a href="mailto:${email}" class="btn">Connect Directly</a>
                            </div>
                        </div>
                        <div class="footer">
                            &copy; ${new Date().getFullYear()} The A2 Gym High Performance Training Center.<br/>
                            Nagra Toli, SN Yadav Road, Ranchi, Jharkhand.
                        </div>
                    </div>
                </body>
                </html>
            `,
            attachments: [{
                filename: 'logo.png',
                path: path.join(__dirname, 'public', 'logo.png'),
                cid: 'gymlogo'
            }]
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
