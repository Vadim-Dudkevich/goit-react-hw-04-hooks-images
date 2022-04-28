function fetchImg(searchQuery, page = 1) {
  const url = 'https://pixabay.com/api/';
  const myKey = '27022486-988ece26e93ba6ec98e850480';
  const filter = 'image_type=photo&orientation=horizontal&per_page=12';

  return fetch(
    `${url}?key=${myKey}&q=${searchQuery}&${filter}&page=${page}`
  ).then(response => response.json());
}

export default fetchImg;
