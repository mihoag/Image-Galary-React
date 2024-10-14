const Card = ({ imageSrc, description, author }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img src={imageSrc} alt={description} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-center text-lg font-bold">{author}</h3>
      </div>
    </div>
  );
};

export default Card;