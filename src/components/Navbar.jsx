import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Ensure this path is correct
import Settings from './Settings';

const Navbar = () => {
  const location = useLocation();
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
            <div className='md:ml-auto '>
              <div className='flex space-x-2'>
                <NavLink to='/' className='transition duration-300 ease-in-out transform hover:scale-110'> 
                  <span className='text-white text-2md font-bold mx-3'>
                    Home
                  </span>
                </NavLink>
                <NavLink to='/photos' className='transition duration-300 ease-in-out transform hover:scale-110'>
                  <span className='text-white text-2md font-bold mx-3'>
                    Gallery
                  </span>
                </NavLink>
                {location.pathname === '/photos' && <Settings
                            style={{
                                position: "absolute",
                                right: "0",
                                bottom: "0",
                                zIndex: "99",
                                transform: "translateY(100%)",
                                minWidth: "300px",
                            }}
                        >
                            <ul className="border rounded-xl p-4 bg-white shadow-lg">
                                <li className="p-2 flex gap-4 items-center justify-between">
                                    <span className="font-semibold">Per page: </span>
                                    <input
                                        type="number"
                                        className="border rounded-3 p-2"
                                        min="5"
                                        max="15"
                                    />
                                </li>
                                <li className="p-2 flex gap-4">
                                    <span className="font-semibold">Max loading images: </span>
                                    <input
                                        type="number"
                                        className="border rounded-3 p-2"
                                        min="30"
                                        step="5"
                                        max="100"
                                    />
                                </li>
                                <div className="text-center">
                                    <button
                                        className="bg-sky-400 hover:bg-sky-600 rounded-md px-4 py-2 text-white font-semibold inline-block"
                                    >
                                        Save
                                    </button>
                                </div>
                            </ul>
                        </Settings>
                        }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
