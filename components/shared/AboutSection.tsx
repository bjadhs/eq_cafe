import React from 'react';
import Gallery from './Gallery';

const AboutSection = () => {
  return (
    <div className='container flex flex-col lg:flex-row  my-8 gap-6'>
      <div className='lg:w-1/4 lg:mr-24 '>
        <h2>About Us</h2>
        <p>
          EQ Cafe and Bakehouse offers a convenient alternative for great
          coffee, breakfast and lunch in Canberra. The versatile venue has a
          heated outdoor area and offers an intimate setting for corporate
          events, conferences, private functions and parties.
        </p>
      </div>
      <div className='lg:w-2/4'>
        <h2>Gallery</h2>
        <Gallery />
      </div>
    </div>
  );
};

export default AboutSection;
