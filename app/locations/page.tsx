import { Button } from '@/components/ui/button';
import { eqCafeLocations } from '@/lib/eq_cafe_locations';
import { Mail, MapPin, Phone } from 'lucide-react';

const Locations = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      {eqCafeLocations.map((location) => (
        <div
          key={location.name}
          className='p-4 border border-red-300 rounded-lg'
        >
          <h3>{location.name}</h3>
          <div className='flex items-center gap-2'>
            <Phone size={16} />
            <p>{location.phone}</p>
          </div>
          <div className='flex items-center gap-2'>
            <Mail size={16} />
            <p>{location.email}</p>
          </div>
          <div className='flex items-center gap-2'>
            <div className=''>
              <MapPin size={16} />
            </div>
            <p>{location.address}</p>
          </div>
          <Button variant='secondary' size='gd'>
            Get Direction
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Locations;
