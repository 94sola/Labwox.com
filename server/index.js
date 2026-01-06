import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import db from "./db.js";
import bodyParser from "body-parser";

const app = express();

// ✅ Fixed CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Save to MySQL
  const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err) => {
    if (err) {
      console.error("Error saving contact:", err);
      return res.status(500).json({ message: "Database error" });
    }
  });

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Labwox Contact" <${process.env.EMAIL_USER}>`,
      to: "info@labwox.com.ng",
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Labwox Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message!",
      html: `
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out to Labwox. We’ve received your message and will get back to you shortly.</p>
        <hr />
        <p><b>Your Message:</b></p>
        <p>${message}</p>
        <br />
        <p>— The Labwox Team</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Email sending failed" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));