export const CHANGE_SCORE = 'CHANGE_SCORE';
export const RESET_GAME = 'RESET_GAME';


export const changeScore = (score) => ({
  type: CHANGE_SCORE,
  payload: score,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
