import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images }) {
  return (
    <>
      <ul className={css.imageGallery}>
        {images.map((image, id) => (
          <ImageGalleryItem key={id} image={image} />
        ))}
      </ul>
      ;
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.string.isRequired,
};
