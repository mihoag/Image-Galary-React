import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import { fetchPhotoDetailApi } from '../api/unsplash';

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    const fetchPhoto = async () => {
      await sleep(1000);
      try {
        const response = await fetchPhotoDetailApi(id);
        setPhoto(response.data);
      } catch (error) {
        console.error('Error fetching photo:', error);
        toast.error('Failed to fetch photo. Please try again later.', { position: 'bottom-right' });
      }
      setLoading(false);
    };
    fetchPhoto();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <Spinner alignStype={'flex justify-center items-center h-screen'} loading={loading} />
      {photo && (
        <div className="container mx-auto mt-4 mb-4">
          <h5 className="text-white font-light mb-3">
            Photo by: <span id="photo-user-name">${photo.user.name}</span>
          </h5>
          <div className="border rounded-lg overflow-hidden">
            <img className="w-full h-auto" src={photo.urls.full} alt="Photo by ${photo.user.name}" />
            <div className="p-4">
              <h5 className="text-lg font-semibold">Photo Title</h5>
              <div className="mb-2">
                <p className="text-gray-700">Title of the photo</p>
              </div>
              <h5 className="text-lg font-semibold">Photo Description</h5>
              <div className="mb-2">
                <p className="text-gray-700">{photo.description}</p>
                <p className="text-gray-700">
                  Size: {photo.width}x{photo.height}
                </p>
              </div>
              <h5 className="text-lg font-semibold">Photographer</h5>
              <div>
                <p className="text-gray-700">Name: {photo.user.name}</p>
                <p className="text-gray-700">Bio: {photo.user.bio}</p>
                <p className="text-gray-700">Location: {photo.user.location}</p>
                <p className="text-gray-700">Instagram: {photo.user.instagram_username}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDetail;
