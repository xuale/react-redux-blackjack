

export const new_deck = () => ({ type: 'NEW_DECK' });

export const deal = () => (dispatch, getState) => {
  dispatch({ type: 'DEAL' });
  if (getState().playerScore >= 21) {
    dispatch({ type: 'OUTCOME' });
  }
};

export const hit = (who) => (dispatch, getState) => {
  dispatch({ type: 'HIT', who: {who} });
  if (getState().playerScore >= 21) {
    dispatch({ type: 'OUTCOME' });
  }
};

export const stand = () => (dispatch, getState) => {
  while(getState().dealerScore < 17) {
    dispatch(hit('dealer'));
  }
  dispatch({ type: 'OUTCOME' });
};
