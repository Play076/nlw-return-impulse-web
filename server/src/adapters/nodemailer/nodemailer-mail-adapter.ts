import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a4c4d2558e180e",
    pass: "9d1602ef82998f"
  }
});

export class NodemailerMailAdapter implements MailAdapter
{
    async sendMail({ subject, body }: SendMailData)
    {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com.br>',
            to: 'Valdemir Valença <valdemirjr7@hotmail.com>',
            subject,
            html: body,
        });
    };
}
