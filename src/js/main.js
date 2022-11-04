import {popular} from "./consts";
import {top_rated} from "./consts";
import {upcoming} from "./consts";
import {creatFetch, getMoviesDetails} from "./helper"

checkUrl()

window.addEventListener('hashchange', (e) => {
    checkUrl()
});

function checkUrl(){
    const [hash, movieId] = location.hash.split('=')
if(hash === '#movieId'){
    getMoviesDetails(movieId)
}else{
    creatFetch(popular, '.popular')
    creatFetch(top_rated, '.top_rated')
    creatFetch(upcoming, '.upcoming')
}}