import nodemailer from "nodemailer";

export const handler = async (event) => {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // ✨ your Gmail
      pass: "your-app-password", // ✨ app password from Google
    },
  });

  const mailOptions = {
    from: data.email,
    to: "your-email@gmail.com",
    subject: `Message from ${data.name}`,
    text: data.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
