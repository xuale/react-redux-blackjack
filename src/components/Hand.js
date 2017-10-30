import React, {Component } from 'react'
import PropTypes from 'prop-types'


const vals = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const suits = ['♣', '♦', '♥', '♠'];

export default const Deck = new Set([]);

export default class Card extends Component {
	constructor() {
		super();
		this.state.val = vals[Math.floor(Math.random()*vals.length)];
		this.state.suit = suits[Math.floor(Math.random()*suits.length)];
		this.generateCard = this.generateCard.bind(this);
		this.getValue = this.getValue.bind(this);
	}
	generateCard() {
		var c = new Card()
		if(!Deck.has(c)) {
			Deck.add(c);
			return c;
		}
		else if(Deck.size === 52) {
			console.log('All cards have been used');
		}
		else {
			return generateCard();
		}
	}
	getValue() {
		if(this.state.val >= 2 && this.state.val <= 9) {
			return this.state.val;
		}
		else {
			return 10;
		}

	}
	render() {
		return (
			<div> {this.state.val} {this.state.suit}  </div>
			);
	}
} 

class Hand extends Component {
	constructor(props) {
		super(props);
		this.state = {cards: [], who: props.who, score: 0};
	}
	componentWillReceiveProps(nextProps) {
        if(this.state.who === 'dealer') {
        	this.setState({
        		cards: nextProps.dealerHand, 
        		score: nextProps.dealerScore});
		}
		else {
			this.setState({
        		cards: nextProps.playerHand, 
        		score: nextProps.playerScore});
		}	
    }
	render() {
		this.state.cardList = this.state.cards.map((card) => <li>{card}</li>)
		return (
			<ul>{this.state.cardList}</ul>
		);
	}
}

export default Hand

function mapStateToProps (state) {
	return {
		dealerHand: state.dealerHand,
		dealerScore: state.dealerScore,
		playerHand: state.playerHand,
		playerScore: state.playerScore
	};
}

export default connect(mapStateToProps)(Hand)