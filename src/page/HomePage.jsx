import Type from '../components/Type'; // Assuming you have a Type component for the typing effect
import homeLogo from '../assets/images/home-main.svg'; // Replace with the correct path to your logo
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col p-5 mx-5 min-h-[65vh] lg:flex-row lg:p-10 lg:mx-10">
      {/* Left Side Content */}
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <Type />
          <p
            style={{ textAlign: 'justify' }}
            className="py-5 text-xs sm:text-lg lg:text-xl xl:text-2xl leading-normal text-gray-500 dark:text-gray-300"
          >
            Welcome to the Image Gallery Project, an exciting endeavor where I aim to create a beautiful, dynamic
            gallery using images sourced from the Unsplash API. This project is designed to showcase various photos,
            allowing users to explore a wide variety of categories such as nature, technology, people, architecture, and
            more.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              to="/photos"
              className="px-4 py-2 text-md sm:text-lg font-medium text-center text-white bg-indigo-500 hover:bg-indigo-600 rounded-md transition-all duration-300"
            >
              Show gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex items-center justify-center w-full lg:w-1/2 mt-5 lg:mt-0">
        <img src={homeLogo} alt="home" className="max-w-full h-auto max-h-[450px] rounded-lg" />
      </div>
    </div>
  );
};

export default HomePage;
