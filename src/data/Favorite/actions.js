import axios from 'axios'
import * as TYPES from './constants'

const getFavoriteSongsRequest = () => ({
  type: TYPES.GET_FAVORITE_SONGS_REQUEST
});

const getFavoriteSongsRequestSuccess = (payload) => ({
  type: TYPES.GET_FAVORITE_SONGS_SUCCESS,
  payload,
});

const getFavoriteSongsRequestError = (payload) => ({
  type: TYPES.GET_FAVORITE_SONGS_ERROR,
  payload,
});

export const getFavoriteSongs = () => (dispatch) => {
  dispatch(getFavoriteSongsRequest());

  return axios.get('./dummyFavoriteSongs.json')
    .then((res) => {
      dispatch(getFavoriteSongsRequestSuccess(res.data))
    }).catch((err) => {
      dispatch(getFavoriteSongsRequestError(err))
    })
};
