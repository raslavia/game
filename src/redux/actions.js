import ActionTypes from './types';

export const roundUp = (tiles) => ({
  type: ActionTypes.ROUND_UP,
  payload: tiles,
});

export const playAgain = () => ({
  type: ActionTypes.PLAY_AGAIN,
});
