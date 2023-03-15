import {FC, memo, useCallback, useMemo, useState} from 'react';
// import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log(data)
      /**
       * This is a good starting point to wire up your form submission logic
       * */

      // create reusable transporter object using the default SMTP transport
      // let transporter = nodemailer.createTransport({
      //   host: process.env.MAILER_HOST,
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      //   auth: {
      //     user: process.env.MAILER_USER,
      //     pass: process.env.MAILER_PASS,
      //   },
      // });

      // // send mail with defined transport object
      // let info = await transporter.sendMail({
      //   from: '"BJ McCotter" <bj@mccotter.net>',
      //   to: data.email,
      //   subject: "Hello " + data.name,
      //   text: data.message,
      // });

      // console.log("Message sent: %s", info.messageId);
      // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // // Preview only available when sending through an Ethereal account
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // console.log('Data to send: ', data);
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
