import express, { Router, json } from "express";
const router = Router();
import cors from "cors";
import nodemailer from "nodemailer";
import { createTransport } from "nodemailer";

// server used to send send emails
const app = express();
app.use(cors());
app.use(json());
app.use("/portfolio", router);
app.listen(587, () => console.log("Server Running"));


const contactEmail = createTransport({
  service: "smtp.mail.me.com",
  auth: {
    user: "christianfitaramirez@icloud.com",
    pass: process.env.APP_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/portfolio/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "christianfitaramirez@icloud.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});


