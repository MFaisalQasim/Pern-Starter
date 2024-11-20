const resetPasswordSubjectForInternal = (name: string | null) => {
  return `${name}, Password Reset Request`;
};

const resetPasswordEmailTemplate = (name: string | null, resetUrl: string) => {
  const template = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
  
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          h1 {
              color: #333333;
          }
  
          p {
              color: #555555;
          }
  
          .code {
              font-size: 24px;
              font-weight: bold;
              color: #007bff;
          }
  
          .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              text-align: center;
              text-decoration: none;
              background-color: #007bff;
              color: #ffffff;
              border-radius: 5px;
              cursor: pointer;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <h1>Password Reset</h1>
          <p>Hello ${name},</p>
          <p>We received a request to reset your password. Please hit the button to reset your password:</p>
          <p>If you didn't request a password reset, you can ignore this email.</p>
          <p>Best regards,<br>faisalCodes</p>
          <p style="text-align: center;">
              <a href="${resetUrl}" class="button">Reset Link</a>
          </p>
      </div>
  </body>
  </html>
  `;
  console.log('reset email template', template);
  return template;
};

export { resetPasswordEmailTemplate, resetPasswordSubjectForInternal };
