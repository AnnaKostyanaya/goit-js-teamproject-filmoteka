import { API } from '../api';
import { createMovieCardMarkup } from '../create-movie-card';
import { onMovieClick } from './modal-open';
import { renderPagination } from '../utils/pagination';

const api = new API();

const refs = {
  moviesList: document.querySelector('.movies-grid__list'),
  pagination: document.querySelector('.pagination-list'),
};

refs.moviesList.addEventListener('click', onMovieClick);

getLatestMovies();

async function getLatestMovies() {
  const movies = await createData();
  const getPromise = movies.results.map(createMovieCardMarkup);
  const template = (await Promise.all(getPromise)).join('');

  refs.moviesList.innerHTML = template;
  renderPagination(movies.total_pages, refs.pagination, getLatestMovies, api);
}

async function createData() {
  try {
    return await api.getMovieLatest('week');
  } catch (error) {
    console.log(error.message);
  }
}
