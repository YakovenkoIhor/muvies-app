
import {generateUrl} from "./utils"

fetch(generateUrl('/movie/popular'))
.then(res => res.json())
.then(data => {
    console.log(data);
    const movies = data.results.map(({poster_path, original_title, release_date, popularity}) => (`
    <div class="movie">
        <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="${original_title}">
        <div class="title">${original_title}</div>
        <div class="date">${release_date}</div>
        <div class="rate">${popularity}</div>

    </div>
    `)).join('');
    document.querySelector('.popular').innerHTML = movies
})