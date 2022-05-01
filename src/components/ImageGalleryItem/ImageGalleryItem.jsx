import { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';

import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image }) {
  const [showModal, setShowModal] = useState(false);
  const { webformatURL, largeImageURL, tags } = image;

  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItem_img}
        src={webformatURL}
        alt={tags}
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <Modal
          imgUrl={largeImageURL}
          imgTags={tags}
          onClose={() => setShowModal(false)}
        />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
};
