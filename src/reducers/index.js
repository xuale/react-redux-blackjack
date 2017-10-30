import {Deck, Card} from '../components/Hand'

const initialState = {
  drawPile: newShuffledPokerDeck(),
  dealerHand: [],
  dealerScore: 0,
  playerHand: [],
  playerScore: 0,
  status: 'Playing'
};

const reducer = function(state = initialState, action) {
  const newState = {...state}
  switch(action.type) {
    case 'DEAL':
      var playerCard = new Card();
      playerCard = playerCard.generateCard();
      var dealerCard = playerCard.generateCard();
      newState = Object.assign({}, 
       state, 
       {playerHand: [playerCard]},
       {dealerHand: [dealerCard]}
       {playerScore: state.playerScore + playerCard.getValue()},
       {dealerScore: state.dealerScore + dealerCard.getValue()});
    case 'HIT':
      var card = new Card();
      card = card.generateCard();
      if(action.who == 'dealer') {
        var newHand = state.dealerHand;
        newHand.push(card);
        newState = Object.assign({}, 
         state, 
         {dealerHand: newHand},
         {dealerScore: state.dealerScore + card.getValue()});
      }
      else {
        var newHand = state.playerHand;
        newHand.push(card);
        newState = Object.assign({}, 
         state, 
         {playerHand: newHand},
         {playerScore: state.playerScore + card.getValue()});
      }
    case 'NEW_DECK':
      Deck.clear();      
    case 'OUTCOME':
      var newStatus = state.status;
      if (state.playerScore === 21 || state.dealerScore > 21 || state.playerScore >= state.dealerScore) {
        newStatus = 'Win';
      }
      else if (state.playerScore > 21 || state.playerScore < state.dealerScore) {
        newStatus = 'Lose';
      }
      newState = Object.assign ({},
                                state,
                                {status=newStatus});

  }
  return newState;
}
export default reducer