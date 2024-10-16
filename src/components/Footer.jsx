import { FaFacebook, FaGithub } from 'react-icons/fa'; // Importing Facebook and GitHub icons from react-icons

/**
 * Footer component that displays social media links.
 */
const Footer = () => {
  return (
    <footer className="bg-indigo-700 border-b border-indigo-500 py-4">
      <div className="flex justify-center mt-2 space-x-4">
        {/* Facebook link */}
        <a
          href="https://www.facebook.com/leminh.hoang.50115161"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-300"
        >
          <FaFacebook size={24} /> {/* Facebook icon */}
        </a>
        {/* GitHub link */}
        <a
          href="https://github.com/mihoag"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-300"
        >
          <FaGithub size={24} /> {/* GitHub icon */}
        </a>
      </div>
      <div className="text-center text-white text-xl font-bold my-3">21120457 - Le Minh Hoang</div>
    </footer>
  );
};

export default Footer;
