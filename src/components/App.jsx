import { useEffect, useState } from 'react';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import css from './App.module.css';

import Notiflix from 'notiflix';
import fetchImg from '../services/img-api';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState(null);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (searchInput !== '') {
      setIsLoading(true);

      fetchImg(searchInput, page)
        .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            setImages(null);
            setTotalHits(0);
            return Promise.reject(
              new Error(`There is no image with name ${searchInput}`)
            );
          }

          const arrayOfImages = createArrayOfImages(hits);

          setTotalHits(totalHits);

          return arrayOfImages;
        })

        .then(arrayOfImages => {
          if (page === 1) {
            setImages(arrayOfImages);
            window.scrollTo({
              top: 0,
            });
            return;
          }

          setImages(prevImages => [...prevImages, ...arrayOfImages]);
        })

        .catch(error => {
          Notiflix.Notify.warning(`${error.message}`);
        })

        .finally(() => turnOffLoader());
    }
  }, [page, searchInput]);

  const createArrayOfImages = data => {
    const arrayOfImages = data.map(element => ({
      tags: element.tags,
      webformatURL: element.webformatURL,
      largeImageURL: element.largeImageURL,
    }));
    return arrayOfImages;
  };

  const turnOffLoader = () => setIsLoading(false);

  const formSubmitHandler = data => {
    setSearchInput(data);
    setPage(1);
  };

  const nextFetch = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={formSubmitHandler} />
      {images && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images && images.length >= 12 && images.length < totalHits && (
        <Button onClick={nextFetch} />
      )}
    </div>
  );
}

// export default App;
