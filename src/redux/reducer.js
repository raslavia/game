import ActionTypes from './types';

const INITIAL_STATE = {
  round: 1,
  tiles: [
    { color: 'red' },
    { color: 'red' },
    { color: 'yellow' },
    { color: 'yellow' },
    { color: 'green' },
    { color: 'green' },
    { color: 'purple' },
    { color: 'purple' },
    { color: 'orange' },
    { color: 'orange' },
    { color: 'pink' },
    { color: 'pink' },
    { color: 'lightBlue' },
    { color: 'lightBlue' },
    { color: 'blue' },
    { color: 'blue' },
  ],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ROUND_UP:
      const newRound = (state.round += 1);
      return {
        ...state,
        round: newRound,
        tiles: action.payload
      };
    case ActionTypes.PLAY_AGAIN:
      return {
        ...state,
        round: 1,
      };
    default:
      return state;
  }
};

export default appReducer;
