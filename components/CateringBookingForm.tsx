'use client';
import { useState } from 'react';
import { Button } from './ui/button';

const CateringBookingForm = () => {
  const [selectedOutlet, setSelectedOutlet] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [submittedData, setSubmittedData] = useState<null | {
    name: string;
    email: string;
    phone: string;
    message: string;
  }>(null);

  const outlets = ['Deakan', 'DFO', 'Gungahlin', 'Brindabella'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({ name, email, phone, message });
  };

  return (
    <div>
      <form className='w-full grid grid-cols-3 gap-2' onSubmit={handleSubmit}>
        <select
          id='outlet'
          value={selectedOutlet}
          onChange={(e) => setSelectedOutlet(e.target.value)}
          className='col-span-3 w-full p-2 focus:outline-none rounded-md'
        >
          <option value=''>Select Outlet</option>
          {outlets.map((outlet) => (
            <option key={outlet} value={outlet} className='bg-white'>
              {outlet}
            </option>
          ))}
        </select>

        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='tel'
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input type='text' placeholder='Suburb' />
        <input type='date' placeholder='Date' />
        <input type='time' placeholder='Time' />

        <input type='text' placeholder='Catering For' name='event' />
        <input type='number' placeholder='Number of people' name='people' />
        <input type='text' placeholder='Catering Type' name='type' />

        <textarea
          className='col-span-3'
          placeholder='Any Special requirement'
          name='additionalInfo'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <Button variant='secondary' type='submit' className='col-span-1'>
          Submit
        </Button>
      </form>

      {submittedData && (
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ccc',
          }}
        >
          <h3>Booking Confirmation</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Phone:</strong> {submittedData.phone}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default CateringBookingForm;
