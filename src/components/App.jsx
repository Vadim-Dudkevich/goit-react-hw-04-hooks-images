import { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
// import ImageGallery from './ImageGallery/ImageGallery'
// import Button from './Button/Button'
// import Loader from './Loader/Loader'
// import Modal from './Modal/Modal'

import css from './App.module.css';

// import Notiflix from 'notiflix';

class App extends Component {
  state = {
    searchInput: '',
    page: 1,
    isLoading: false,
    images: null,
    totalHits: 0,
    imagesOnPage: 0,
    error: null,
    showModal: false,
    currentLargeImageUrl: '',
    currentImageTags: '',
  };

  render() {
    return (
      <div className={css.app}>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;
