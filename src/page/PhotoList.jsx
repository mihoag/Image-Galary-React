import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import Card from '../components/Card';

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'DG4czygItrcnGUn8xJYplRtc0ZvMFRowuugZl107jyE';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        await sleep(2000);
        const response = await axios.get(`${UNSPLASH_API_URL}/photos`, {
          params: { page, per_page: 10, client_id: ACCESS_KEY },
        });

        console.log(response.data);

        setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
        setHasMore(response.data.length > 0);
      } catch (error) {
        console.error('Error fetching photos:', error);
        toast.error('Failed to fetch photos. Please try again later.', {
          position: "bottom-right",
        });
      }
      setLoading(false);
    }; 
    fetchPhotos();
  }, [page]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight >= scrollHeight-1 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (

    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

      {photos.map((photo) => (
        <Link  key={photo.id} to={`/photos/${photo.id}`}>
        <Card
            imageSrc={photo.urls.thumb}
            description={photo.alt_description}
            author = {photo.user.name}
        />
       </Link>
      ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Spinner loading={loading} />
       </div>

      {!hasMore && <div className="end">No more photos</div>}
    </div>
  );
};

export default PhotoList;