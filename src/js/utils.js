import {API_KEY, API} from "./consts"
export const generateUrl = path => `${API}${path}?api_key=${API_KEY}`
export const convertDate = date => new Date(date).toDateString();
export const generateTitle = str => (str[1].toUpperCase() + str.slice(2)).replace(/_/g, ' ')

