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
      setLoading(false); // Set loading state to false after fetching the photo
    };
    fetchPhoto(); // Call the fetchPhoto function to fetch photo details
  }, [id]); // Dependency array with id, so the effect runs when the id changes

  return (
    <div className="container mx-auto p-6">
      {/* Spinner component to show loading state */}
      <Spinner alignStype={'flex justify-center items-center h-screen'} loading={loading} />
      
      {/* Render photo details if photo data is available */}
      {photo && (
        <div className="container mx-auto mt-4 mb-4">
          {/* Photo container with border and rounded corners */}
          <div className="border rounded-lg overflow-hidden">
            {/* Display the photo */}
            <img className="w-full h-auto" src={photo.urls.full} alt={`Photo by ${photo.user.name}`} />
            
            {/* Photo details section */}
            <div className="p-4">
              {/* Photo title */}
              <h5 className="text-lg font-semibold">Photo Title</h5>
              <div className="mb-2">
                {/* Display the photo title or a default message if the title is not available */}
                <p className="text-gray-700">{photo.title || 'Title of the photo'}</p>
              </div>
              <h5 className="text-lg font-semibold">Photo Description</h5>
              <div className="mb-2">
                <p className="text-gray-700">Description: {photo?.description ?? photo.alt_description}</p>
              </div>
              <h5 className="text-lg font-semibold">Photographer</h5>
              <div>
                <p className="text-gray-700">Name: {photo?.user?.name ?? "An unknown author"}</p>
                <p className="text-gray-700">Bio: {photo.user.bio}</p>
                <p className="text-gray-700">Location: {photo.user.location}</p>
                <p className="text-gray-700">Instagram:  {photo.user.instagram_username}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoDetail;
