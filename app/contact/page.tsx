import MessageForm from '@/components/shared/MessageForm';
import { Mails } from 'lucide-react';

const emailList = [
  'brindabella@eqcafe.com.au',
  'civic@eqcafe.com.au',
  'eqcafe@eqcafe.com.au',
  'dfo@eqcafe.com.au',
  'gungahlin@eqcafe.com.au',
  'majura@eqcafe.com.au',
];

const Contact = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-2'>
        <div className='h-[6px] w-6 bg-[#D1B019] border rounded-full'></div>
        <h3>Contact</h3>
      </div>
      <div className='pb-8 flex flex-col items-center'>
        <h1>Contact information</h1>
        <p>
          Contact us for any inquiries or reservations. We’re here to help and
          ensure you have a great experience at EQ Cafe.
        </p>
      </div>

      <div className='flex w-full gap-4'>
        {/* Write email to us */}
        <div className='flex flex-col items-center gap-1'>
          <Mails size={48} />
          <h2>Write Us</h2>
          {emailList.map((email) => (
            <p key={email}>{email}</p>
          ))}
        </div>
        {/* Form to send message */}
        <MessageForm />
      </div>
    </div>
  );
};

export default Contact;
