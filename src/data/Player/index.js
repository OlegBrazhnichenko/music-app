import * as TYPES from './constants'

const initialState = {
  selectedSong: null,
  isPlaying: false,
};

export const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case TYPES.SELECT_SONG : {
      return {
        ...state,
        selectedSong: payload,
        isPlaying: true,
      }
    }
    case TYPES.RESET_PLAYER : {
      return {
        ...initialState,
      }
    }

    default:
      return state
  }
};
