import React, {Fragment} from 'react';
import {Route} from "react-router-dom"
import Home from './components/Body/Home'
import DetailsAlbum from './components/Body/DetailsAlbum'
import FavoritesAlbums from './components/Body/FavoritesAlbums'

export default function routes() {
  return (
   <Fragment>
     {/* <Route path="/" exact component={Home}/> */}
     <Route path="/" exact component={Home}/>
     <Route path="/details/:id" exact component={DetailsAlbum}/>
     <Route path="/favoritos" exact component={FavoritesAlbums}/>
  


   </Fragment>
  )
}
