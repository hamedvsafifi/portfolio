import nodemailer from "nodemailer";

export const handler = async (event) => {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abnafify@gmail.com", // Replace with your Gmail address
      pass: "muuj monb glzf ebup", // Replace with your app-specific password
    },
  });

  const mailOptions = {
    from: "abnafify@gmail.com", // Replace with your Gmail address
    to: "abnafify@gmail.com", // Replace with the recipient's email
    subject: `Message from ${data.name}`,
    text: `From: ${data.email}\nMessage: ${data.message}`,
    replyTo: data.email, // Allows replying directly to the sender
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
