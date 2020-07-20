import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, connect } from 'react-redux'
import { getFavoriteSongs } from 'data/Favorite/actions'
import { selectSong } from 'data/Player/actions'

import SongsList from 'components/SongsList'

const Favorite = ({songs, isFetched}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(getFavoriteSongs())
    }
  }, [dispatch, isFetched]);

  const handleSongSelect = (song) => {
    dispatch(selectSong(song))
  };

  return (
    <SongsList
      songs={songs}
      onSongSelect={handleSongSelect}
    />
  )
};

Favorite.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    albumImage: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  })),
  isFetching: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
};

Favorite.defaultProps = {
  songs: [],
};

const mapStateToProps = (state) => ({
  songs: state.FAVORITES.songs,
  isFetching: state.FAVORITES.isFetching,
  isFetched: state.FAVORITES.isFetched,
});

export default connect(mapStateToProps)(Favorite);