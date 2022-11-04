import {generateUrl, convertDate, generateTitle} from "./utils"
import { API_KEY } from "./consts";

export const creatMovie = ({id, poster_path, original_title, release_date, vote_average}) => (`
        <div class="movie">
            <a href="#movieId=${id}">
                <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="${original_title}">
            </a>
            <div class="title">${original_title}</div>
            <div class="date">${convertDate(release_date)}</div>
            <div class="rate">${vote_average*10+'%'}</div>
        </div>
`);

export const creatMovies = (movies, className) => (`
<section>
    <h2>${generateTitle(className)}</h2>
    <div class="${className.slice(1)}">
        ${movies.map(movie => creatMovie (movie)).join('')}
    </div>
</section>
`) 

export const creatFetch = (el, className) => {
    fetch(generateUrl(el))
    .then(res => res.json())
    .then(data => {
    const root = document.querySelector('#root')
        if(data.success === false){
            root.innerHTML = renderError(data)
        }else{
            root.innerHTML += creatMovies(data.results, className);
        }
    })
}

export const getMoviesDetails = (el, className) => {
    fetch(generateUrl(el))
    .then(res => res.json())
    .then(data => {

    const root = document.querySelector('#root')
        if(data.success === false){
            root.innerHTML = renderError(data)
        }else{
            root.innerHTML = renderMoviesDetails(data);
        }
    })
}

export const renderMoviesDetails = movie => (`
<section>
    <div>
        ${creatMovieDetails (movie)}
    </div>
</section>
`) 

export const creatMovieDetails = ({id, backdrop_path, original_title, release_date, vote_average}) => (`
        <div class="movieDetails">
            <a href="#movieId=${id}">
                <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${original_title}">
            </a>
            <div class="titleDetails">${original_title}</div>
            <div class="dateDetails">Release date: ${convertDate(release_date)}</div>
            <div class="rateDetails">Rate: ${Math.ceil(vote_average*10)+'%'}</div>
        </div>
`);

export const renderError = ({status_code, status_message}) => (`
<section>
    <div>
        <h2>Status code: ${status_code}</h2>
        <p>Status message: ${status_message}</p>
    </div>
</section>
`) 

export const creatSearch = (movies, className) => (`
<section>
    <div class="search">
        ${movies.map(movie => creatMovie (movie)).join('')}
    </div>
</section>
`) 

document.getElementById('formElem').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${formData.get('search')}`)
  .then(res => res.json())
  .then(data => {
    const root = document.querySelector('#root')
        if(data.success === false){
            root.innerHTML = renderError(data)
        }else{
            root.innerHTML = creatSearch(data.results);
        }
  })
})

