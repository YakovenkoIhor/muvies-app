import {popular} from "./consts";
import {top_rated} from "./consts";
import {upcoming} from "./consts";
import {creatFetch} from "./helper"

creatFetch(popular, '.popular')
creatFetch(top_rated, '.top_rated')
creatFetch(upcoming, '.upcoming')