/* eslint-disable prettier/prettier */

const onboardingSubjectForInternal = () => {
  return `Welcome to faisalCodes!`;
};

const onboardingEmailTemplate = (name: string | null, role: string) => {
  let content: any;
  if (role === 'ADMIN') {
    content = `
    <h2>Welcome to faisalCodes Admin Panel!</h2>
    <p>Dear ${name},</p>
    <p>Congratulations on becoming an administrator for faisalCodes. Your role is crucial in managing and overseeing the operations of our platform.</p>
    <p>We trust that your expertise and leadership will contribute significantly to the success of faisalCodes. If you have any questions or require support, please reach out to our admin support team.</p>
    <p>Thank you for being a part of our journey towards creating a positive impact.</p>
    <p>Best regards,<br/>The faisalCodes Team</p>
    `;
  }

  if (role === 'EMPLOYEE') {
    content = `<h2>Welcome to faisalCodes Team!</h2>
    <p>Dear ${name},</p>
    <p>On behalf of the faisalCodes team, we extend a warm welcome to you. We are thrilled to have you as a part of our family.</p>
    <p>As you embark on your journey with us, please take the time to familiarize yourself with our mission and values. Your dedication and talents are integral to our success.</p>
    <p>If you have any questions or need assistance, feel free to contact our HR department.</p>
    <p>Best regards,<br/>The faisalCodes Team</p>`;
  }
  if (role === 'PARENT') {
    content = ` <h2>Welcome to faisalCodes!</h2>
    <p>Dear Parent,</p>
    <p>Thank you for choosing faisalCodes to be a part of your child's educational journey. We're delighted to have you on board!</p>
    <p>Your Parent account is now set up, and you can log in to explore the features designed to keep you connected with your child's learning experience.</p>
    <p>If you have any questions or need assistance, our support team is here to help. We look forward to making learning a joyous experience for your child!</p>
    <p>Best regards,<br/>The faisalCodes Team</p>`;
  }
  if (role === 'USER') {
    content = ` <h2>Welcome to faisalCodes!</h2>
    <p>Dear ${name},</p>
    <p>Thank you for joining faisalCodes. We're excited to have you on board. Your journey with us starts now!</p>
    <p>Feel free to explore our platform and discover the amazing features we offer. If you have any questions, don't hesitate to reach out to our support team.</p>
    <p>Best regards,<br/>The faisalCodes Team</p>`;
  }
  let template = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>faisalCodes - User Onboarding</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
  
          .container {
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              width: 80%;
              margin: 20px auto;
          }
  
          h2 {
              color: #4caf50;
          }
  
          p {
              color: #333;
          }
      </style>
  </head>
  <body>
      <div class="container">
         ${content}
      </div>
  </body>
  </html>
  
  `;
  console.log('onboarding email template', template);
  return template;
};

export { onboardingEmailTemplate, onboardingSubjectForInternal };
