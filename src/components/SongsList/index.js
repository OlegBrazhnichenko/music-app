import React from 'react'
import PropTypes from 'prop-types'
import DummyAlbumImage from 'assets/albumImage.jpg'

import './styles.scss'

const SongsList = ({ songs, onSongSelect }) => {

  return (
    <div className="songs-list">
      {songs.map((song) => (
        <div
          key={song.id}
          onClick={()=>{ onSongSelect(song) }}
          className="songs-list_item"
        >
          <img
            className="songs-list_item_album-image"
            src={DummyAlbumImage}
            alt="album"
          />
          <div className="songs-list_item_description">
            <div className="songs-list_item_description_author">
              {song.author}
            </div>
            <div className="songs-list_item_description_song">
              {song.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

};

SongsList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    albumImage: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  })),
  onSongSelect: PropTypes.func.isRequired,
};

SongsList.defaultProps = {
  songs: [],
};

export default SongsList;