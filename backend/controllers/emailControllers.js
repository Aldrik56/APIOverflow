const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = (req, res) => {
  const { email, subject, message } = req.body;
  const file = req.files && req.files.file;

  console.log(email, subject, message);

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    text: message,
    attachments: file ? [{ filename: file.name, content: file.data }] : []
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: 'Failed to send email.' });
    } else {
      console.log('Email sent successfully!');
      res.send({ message: 'Email sent successfully!' });
    }
  });
};

module.exports = { sendEmail };
