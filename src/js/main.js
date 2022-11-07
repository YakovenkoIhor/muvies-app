import {popular} from "./consts";
import {top_rated} from "./consts";
import {upcoming} from "./consts";
import {creatFetch, getMoviesDetails, getSearch} from "./helper"

checkUrl()

window.addEventListener('hashchange', (e) => {
    checkUrl()
});

function checkUrl(){
    const [hash, movie] = location.hash.split('=')
    
    if(hash === '#movieId'){
        getMoviesDetails(movie)
    }else{
        if(hash === '#search'){
            getSearch(movie)
        }
        else{
            creatFetch(popular, '.popular')
            creatFetch(top_rated, '.top_rated')
            creatFetch(upcoming, '.upcoming')
}}}