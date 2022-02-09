import React, { Component } from 'react'
import * as actions from '../../services/musicaService'
import Header from '../Head/Header'


class DetailsAlbum extends Component {
  state = {
    album: '',
    tracks: []
  }

  componentDidMount() {
    actions.getAlbum(this.props.match.params.id).then(album => {
      this.setState({
        album,
        tracks: album.tracks.data
      })
    });
  }

  renderTracks = () => {
    const { tracks } = this.state
    return tracks && tracks.length ?
      tracks.map((track, index) => (
        <figure key={index} class="figure">
          <figcaption className="figure-caption text-xs-right">Escuchar {track.title} </figcaption>
          <audio controls src={track.preview}>
            Su navegador no es compatible
            <code>audio</code> html element.
          </audio>
        </figure>

      ))
      :
      null;
  }

  renderAlbum = () => {
    const { album } = this.state;
    return (
      <div className="col-md-12 mb-3">
        <div className="card border-danger">
          <img src={album.cover_big} alt="" className="car-img-top" />
          <div className="card-body">
            <span className="text-primary">{album.release_date}</span>
            <div className="car-title">
              {album.title}
            </div>
          </div>
          <div className="card-footer">
            {this.renderTracks()}
          </div>
        </div>
      </div>

    )

  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md10 mx-auto">
            <Header />
            <div className="row">
              {this.renderAlbum()}
            </div>

          </div>
        </div>
      </div>
    )
  }


}

export default DetailsAlbum