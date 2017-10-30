import React, { Component } from 'react'
import Controller from './Controller'
import Hand from './Hand'

class Game extends Component {
	render() {
		return (
			<div>
				<h1> Dealer </h1>
				<Hand who='dealer' />
				<h1> Player </h1>
    			<Hand who='player' />
    			<Controller />
  			</div>
		);
	}
}

export default Game
