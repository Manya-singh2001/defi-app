import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[#00d8ff]'>DEFI</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li className=' hover:text-blue-500 cursor-pointer'>Platform</li>
            <li className=' hover:text-blue-500 cursor-pointer'>Developers</li>
            <li className=' hover:text-blue-500 cursor-pointer'>Community</li>
            <li className=' hover:text-blue-500 cursor-pointer'>About</li>
            <button className='ml-4'>Use Defi</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl hover:text-blue-500 cursor-pointer'>Platform</li>
            <li className='text-2xl hover:text-blue-500 cursor-pointer'>Developers</li>
            <li className='text-2xl hover:text-blue-500 cursor-pointer'>Community</li>
            <li className='text-2xl hover:text-blue-500 cursor-pointer'>About</li>
            <button className='m-8'>Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
