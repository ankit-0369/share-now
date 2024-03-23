import { EmailTemplate } from '../../_components/mail-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const response= await req?.json()
    // console.log("response json from POST method:  " , response);
  try {
    const data = await resend.emails.send({
      from: 'Acme <sharenow@resend.dev>',
      to: [response.receiverEmail ],
      subject: response.userName+ " has shared you a file." ,
      react: EmailTemplate({ response }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
