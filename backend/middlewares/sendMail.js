const nodemailer = require("nodemailer");

const sendEmail = async (name, email, subject, text, confirmationCode) => {
    let info = null;
  try {
    const transporter = nodemailer.createTransport({
      pool: true,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    info = await transporter.sendMail({
      from: process.env.MAIL_FROM_ADDRESS,
      to: email,
      subject: subject,
      text: text,
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://192.168.18.78:3308/v1/user/confirm/${confirmationCode}> Click here</a>
        </div>`,
    });
    console.log("email sent sucessfully");
    console.log(info);

  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }

  return info;
};

module.exports = sendEmail;