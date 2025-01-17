import { ShoppingCart } from 'lucide-react';
const Cart = () => {
  return (
    <div className='relative'>
      <ShoppingCart className=' text-gray-500' size={32} />
      <span
        className='absolute -top-2 -right-2 bg-indigo-300 w-4 h-4 border rounded-full text-xs text-center font-bold text-gray-800
      '
      >
        2
      </span>
    </div>
  );
};

export default Cart;
