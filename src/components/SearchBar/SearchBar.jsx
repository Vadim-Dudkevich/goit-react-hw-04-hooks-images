import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';
import Notiflix from 'notiflix';

export default function SearchBar({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = e => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      Notiflix.Notify.failure('Please enter a search term!');
      return;
    }

    onSubmit(searchInput);
  };
  return (
    <header className={css.searchBar}>
      <form onSubmit={handleFormSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchForm_Button}>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <BiSearchAlt2 size={24} />
          </IconContext.Provider>
          <span className={css.searchForm_Button_Label}>Search</span>
        </button>

        <input
          className={css.searchForm_Input}
          value={searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Notiflix.Notify.init({
  distance: '7px',
  timeout: 2000,
});
