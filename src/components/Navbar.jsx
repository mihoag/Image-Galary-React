import { NavLink } from 'react-router-dom';
import Button from './Button'; // Ensure this path is correct
import logo from '../assets/images/logo.png'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500 sticky top-0 z-50'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Image Gallery
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/photos'>
                  <Button text='List photos' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
