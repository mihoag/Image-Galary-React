import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import Card from '../components/Card';
import { fetchPhotoApi } from '../api/unsplash';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const perPage = localStorage.getItem('perPage') ||  10;
  const maxLoadingImages = localStorage.getItem('maxLoadingImages') || 50;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const fetchPhotos = async (pageNum, perPageNum) => {
    if(photos.length >= maxLoadingImages)
    {
      setHasMore(false);
      return;
    }
    setLoading(true);

    // calculate remaining image
    if(photos.length + perPageNum > maxLoadingImages)
    {
      perPageNum = maxLoadingImages - photos.length;
    }

    try {
      await sleep(1500); // Simulate loading delay
      const response = await fetchPhotoApi(pageNum, perPageNum);
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (error) {
      console.error('Error fetching photos:', error);
      toast.error('Failed to fetch photos. Please try again later.');
      setHasMore(false);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchPhotos(page, perPage); // Fetch photos when page or perPage changes
  }, [page]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight >= scrollHeight - 1 && !loading && hasMore) {
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
          <Link key={photo.id} to={`/photos/${photo.id}`}>
            <Card imageSrc={photo.urls.thumb} description={photo.alt_description} author={photo.user.name} />
          </Link>
        ))}
      </div>

      <Spinner alignStype={'flex justify-center items-center mt-6'} loading={loading} />

      {!hasMore && <div className="text-center py-4 text-gray-500">No more photos</div>}
    </div>
  );
};

export default PhotoList;
