import { useState } from 'react';
import { toast } from 'react-toastify';

const SettingPage = () => {
  const [perPage, setPerPage] = useState(localStorage.getItem('perPage') || 10);
  const [maxLoadingImages, setMaxLoadingImages] = useState(localStorage.getItem('maxLoadingImages') || 50);

  const handleConfigPage = () => {
    localStorage.setItem('perPage', perPage);
    localStorage.setItem('maxLoadingImages', maxLoadingImages);
    toast.success('Config saved successfully', {
      position: 'bottom-right',
    });
  };

  return (
    <div className="min-h-[70vh]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleConfigPage();
        }}
        className="py-20 flex items-center justify-center"
      >
        <ul className="border rounded-xl p-4 bg-white shadow-lg w-96">
          <li className="p-2 flex gap-4 items-center justify-between">
            <span className="font-semibold">Per page: </span>
            <input
              type="number"
              value={perPage}
              onChange={(e) => setPerPage(e.target.value)}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
              min={10}
              max={30}
              required
            />
          </li>
          <li className="p-2 flex gap-4 items-center justify-between">
            <span className="font-semibold">Max loading images: </span>
            <input
              type="number"
              value={maxLoadingImages}
              onChange={(e) => setMaxLoadingImages(e.target.value)}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
              min={50}
              max={1000}
              required
            />
          </li>
          <div className="py-4 text-center">
            <button
              type="submit"
              className="bg-sky-400 hover:bg-sky-600 rounded-md px-4 py-2 text-white font-semibold inline-block"
            >
              Save
            </button>
          </div>
        </ul>
      </form>
    </div>
  );
};

export default SettingPage;
