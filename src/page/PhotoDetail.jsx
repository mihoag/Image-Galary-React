import { useState, useEffect } from 'react';
import axios from 'axios';
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
        toast.error('Failed to fetch photo. Please try again later.', { position: "bottom-right" })
      }
      setLoading(false);
    };
    fetchPhoto();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
    
    {loading &&<div className="flex justify-center items-center h-screen">
       <Spinner loading={loading} />
    </div>}
    {
    photo &&
    
        <section className="py-5">
          <div className="container mx-auto">
            <div className="lg:flex lg:space-x-5">
              {/* Main Image Section */}
              <aside className="lg:w-1/2">
                <div className="rounded-lg mb-3 flex justify-center">
                  <a href={photo.urls.full} target="_blank" rel="noopener noreferrer">
                    <img
                      src={photo.urls.full}
                      alt={photo.alt_description}
                      className="rounded-lg max-w-full max-h-screen m-auto"
                    />
                  </a>
                </div>
    
                {/* Extra Images */}
                
              </aside>
    
              {/* Image Details */}
              <main className="lg:w-1/2">
                <div className="lg:pl-3">
                  <h4 className="text-2xl font-bold text-gray-900">The title of the image</h4>

    
                  {/* Category and Brand Info */}
                  <div className="my-4">
                      <div className='my-1'>
                        <dt className="font-bold">Description:</dt>
                        <dd className="text-gray-600">{photo.alt_description}</dd>
                      </div>
                      <div className='my-1'>
                        <dt className="font-bold">Author:</dt>
                        <dd className="text-gray-600">{photo.user.name}</dd>
                      </div>
                  </div>

                </div>
              </main>
            </div>
          </div>
        </section>
   }

  </div>
  )

};

export default PhotoDetail;

