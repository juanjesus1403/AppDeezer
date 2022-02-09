import React, { Component } from 'react';
import Header from '../Head/Header';
import * as actions from '../../services/musicaService';
import { Link } from 'react-router-dom';
import './Home.css'


class FavoritesAlbums extends Component {

  state = {
    albums: []
  }

  componentDidMount() {
    let favorites = actions.getFavoritesAlbum()
    this.setState({
      albums: JSON.parse(favorites)
    })

  }



  renderAlbums = () => {
    const { albums } = this.state;
    return albums && albums.length ?
      albums.map((item, index) => (
        <div key={index} className="col-md-4 mb-2">
          <div className="card border-danger">
            <img src={item.album.cover_big} alt="" className="car-img-top" />
            <div className="card-body">
              <span className="text-primary">{item.artist.name}</span>
              <div className="car-title">
                {item.title}
              </div>
            </div>
            <div className="card-footer">
              <div className="links">
                <Link to={`/details/${item.album.id}`} className='link'><i className="fas fa-play"></i></Link>
              </div>
            </div>
          </div>
        </div>

      ))
      : null;
  }
  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md10 mx-auto">
            <Header />
            <div className="row">
              {this.renderAlbums()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FavoritesAlbums;

