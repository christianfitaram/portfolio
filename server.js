import { env } from 'node:process';
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
app.listen(5026, () => console.log("Server Running"));

//transport configuration for user a site server to send an email.
const contactEmail = nodemailer.createTransport({
  // This is the SMTP mail server to use for notifications. 
  // GCDS uses this mail server as a relay host.
  host: "smtp-mail.outlook.com",
  // SMTP is unlike most network protocols, which only have a single port number. 
  // SMTP has at least 3. They are port numbers 25, 587, and 465.
  // Port 25 is still widely used as a **relay** port from one server to another.
  // Port for SSL: 465
  // Port for TLS/STARTTLS: 587
  port: 587,
  //  if true the connection will use TLS when connecting to server. If false (the 
  // default) then TLS is used if server supports the STARTTLS extension. In most 
  // cases set this value to true if you are connecting to port 465. For port 587 or 
  // 25 keep it false
  secure: false, // use TLS
  auth: {
    user: 'christianfitaramirez@outlook.com',
    pass: 'ylzayzgyyqjpeiqm',
  },
});



contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("contact", (req, res) => {
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


