import axios from "axios";

const API_KEY = '3edc1e2efbmsh85d67782b13330ap14ea47jsn0913b85eb40a'
               

const request = axios.create({
  baseURL : 'https://deezerdevs-deezer.p.rapidapi.com/',
  timeout : 30000,
  headers : {'X-RapidAPI-Key': API_KEY}

})

export function getAlbums(search = 'bad bunny'){
  const albums = request.get(`search?q=${search}`)
    .then(response => response.data.data)
    .catch(error => console.log(error));
    return albums
}

export function getAlbum(id){
  const album = request.get(`album/${id}`)
              .then(response => response.data)
              .catch(error => console.log(error));
  return album;
}

export function getFavoritesAlbum (){
  const albums = localStorage.getItem('favoritos');
  return albums;
}