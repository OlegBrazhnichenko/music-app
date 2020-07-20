import * as TYPES from './constants'

export const selectSong = (payload) => ({
  type: TYPES.SELECT_SONG,
  payload,
});

export const stopPlayer = () => ({
  type: TYPES.RESET_PLAYER,
});
