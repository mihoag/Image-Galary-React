const Button = ({text, type = 'button'}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
    >
      {text}
    </button>
  );
};

export default Button;