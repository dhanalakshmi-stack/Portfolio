import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, message: 'All fields are required' }), { status: 400 });
    }

    // --- Setup transporter ---
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // or your email provider
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email app password
      },
    });

    // --- Email options ---
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // your email to receive messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // --- Send email ---
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully!' }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Something went wrong.' }), { status: 500 });
  }
}
