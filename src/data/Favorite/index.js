import * as TYPES from './constants'

const initialState = {
  isFetching: false,
  songs: [],
  error: null,
  isFetched: false,
};

export const favoriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case TYPES.GET_FAVORITE_SONGS_REQUEST : {
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    }
    case TYPES.GET_FAVORITE_SONGS_SUCCESS : {
      return {
        ...state,
        isFetching: false,
        songs: payload,
        isFetched: true,
      }
    }
    case TYPES.GET_FAVORITE_SONGS_ERROR : {
      return {
        ...state,
        isFetching: false,
      }
    }

    default:
      return state
  }
};
