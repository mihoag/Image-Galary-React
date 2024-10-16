import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import { fetchPhotoApi } from '../api/unsplash';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfiniteScroll from 'react-infinite-scroll-component';

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const perPage = localStorage.getItem('perPage') || 10;
  const maxLoadingImages = localStorage.getItem('maxLoadingImages') || 50;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const fetchPhotos = async (perPageNum) => {
    if (photos.length >= maxLoadingImages) {
      setHasMore(false);
      return;
    }
    setLoading(true);

    // calculate remaining image
    if (photos.length + perPageNum > maxLoadingImages) {
      perPageNum = maxLoadingImages - photos.length;
    }

    try {
      await sleep(2000); // Simulate loading delay
      const response = await fetchPhotoApi(page, perPageNum);
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
      setPage((prePage) => prePage + 1);
    } catch (error) {
      console.error('Error fetching photos:', error);
      toast.error('Failed to fetch photos. Please try again later.');
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotos(perPage);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <InfiniteScroll
        dataLength={photos.length}
        next={() => {
          fetchPhotos(perPage);
        }}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={<div className="text-center py-4 text-gray-500">No more photos</div>}
      >
        <ImageList variant="masonry" cols={Math.floor(windowWidth / 250)} gap={6}>
          {photos.map((photo) => (
            <Link key={photo.id} to={`/photos/${photo.id}`} style={{ textDecoration: 'none' }}>
              <ImageListItem
                key={photo.id}
                sx={{
                  margin: '1%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`${photo.urls.thumb}`}
                  srcSet={`${photo.urls.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={photo.alt_description}
                  loading="lazy"
                />
                <ImageListItemBar position="bottom" title={photo.user.name} />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </InfiniteScroll>

      <Spinner alignStype={'flex justify-center items-center mt-6'} loading={loading} />
    </div>
  );
};

export default PhotoList;
