import dotenv from 'dotenv';
import Text from './mailer.config';

dotenv.config();

import sgMail from '@sendgrid/mail';
import { log } from 'console';
sgMail.setApiKey(process.env.SG_API_KEY);

class Mailer {
  constructor() {}

  async sendEmail(email: string, subject: string, message: string) {
    const mail = {
      from: process.env.FROM_EMAIL,
      // to: email,
      to: 'mfaisalqasimtesting123@gmail.com',
      subject,
      html: message,
    };

    await sgMail
      .send(mail)
      .then((res) => log('email res -> ', res))
      .catch((err) => log('email error -> ', err.response.body));
      console.log(`E-Mail sent to ${mail.to}`);
  }
}

export { Text };
export default new Mailer();
