const CateringBookingForm = () => {
  return (
    <form className='grid grid-cols-3 gap-2'>
      <div>
        <input type='text' name='outlet' />
      </div>
      <div>
        <input type='text' name='name' />
        <input type='email' name='email' />
        <input type='phone' name='phone' />
      </div>
      <div>
        <input type='suburb' name='suburb' />
        <input type='date' name='date' />
        <input type='time' name='time' />
      </div>

      <button
        type='submit'
        className='col-span-3 bg-primary text-primary-foreground rounded-md p-2'
      >
        Submit
      </button>
    </form>
  );
};

export default CateringBookingForm;
