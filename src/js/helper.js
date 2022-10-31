import {generateUrl, convertDate} from "./utils"

export function creatMovie (data, className){
    let movies = data.results.map(({poster_path, original_title, release_date, vote_average}) => (`
        <div class="movie">
            <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="${original_title}">
            <div class="title">${original_title}</div>
            <div class="date">${convertDate(release_date)}</div>
            <div class="rate">${vote_average*10+'%'}</div>
        </div>
`)).join('');
document.querySelector(className).innerHTML = movies
}

export function creatFetch (el, className) {
    fetch(generateUrl(el))
    .then(res => res.json())
    .then(data => {
    creatMovie (data, className)
    })
}

    