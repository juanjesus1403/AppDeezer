import React, { Component } from 'react';
import Header from '../Head/Header';
import Search from '../Searchbar/Search';
import * as actions from '../../services/musicaService';
import { Link } from 'react-router-dom';
import './Home.css'
import swal from 'sweetalert'

class Home extends Component {

  state = {
    albums: []
  }

  componentDidMount() {
    actions.getAlbums().then(item => this.setState({
      albums: item
    }));

  }

  searchAlbums = (term) => {
    actions.getAlbums(term).then(item => this.setState({
      albums: item
    }))

  }


  addToFavoritos = (album) => {
    let oldFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (this.checkAlbum(oldFavoritos, album)) {
      swal({
        title: 'Album Existe!',
        text: 'Album ya agregado a tus favoritos',
        icon: 'warning'

      });

      return false;
    }
    oldFavoritos.push(album);
    let favoritos = oldFavoritos;
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    swal({
      title: 'Album Agregado!',
      text: 'Album agregado a tus favoritos',
      icon: 'success'
    });
  }


  checkAlbum = (albums, album) => {
    let found = albums.some(function (item) {
      console.log(item.album.id + " " + album.album.id);
      return item.album.id === album.album.id;
    });
    return found;
  }

  renderAlbums = () => {
    const { albums } = this.state;
    return albums && albums.length ?
      albums.map((item, index) => (
        <div key={index} className="col-md-3 mb-2">
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
                <a onClick={() => this.addToFavoritos(item)} className='link'><i className="fas fa-heart text-danger"></i></a>
              </div>
            </div>
          </div>
        </div>

      ))
      : null;
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md10 mx-auto">
            <Header />
            <Search searchAlbums={this.searchAlbums} />

            <div className="row">
              {this.renderAlbums()}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Home;

