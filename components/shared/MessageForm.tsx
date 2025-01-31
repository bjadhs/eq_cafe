'use client';
import { useState } from 'react';

const MessageForm = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ fName, lName, phone, email, message });
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className=' grid grid-cols-2 gap-4 w-full'>
      <input
        type='text'
        placeholder='First Name'
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Last Name'
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <input
        type='phone'
        placeholder='Phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='col-span-2'
      />
      <button
        type='submit'
        className='bg-[#D1B019] text-white py-2 px-4 mx-auto rounded-md shadow-lg uppercase col-span-2'
      >
        Send a Message
      </button>
      {isSubmitted && (
        <p className='text-red-500 text-center col-span-2'>
          Thank you ${fName} for contacting us. We will get back to you as soon
          as possible.
        </p>
      )}
    </form>
  );
};

export default MessageForm;
