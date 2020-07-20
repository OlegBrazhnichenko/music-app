import { combineReducers } from 'redux';

import { favoriteReducer } from 'data/Favorite'
import { playerReducer } from 'data/Player'

const reducers = {
  FAVORITES: favoriteReducer,
  PLAYER: playerReducer,
};

export default combineReducers(reducers);
