import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { statuses } from '../reducers/index';


class Controller extends Component {
	constructor() {
		super();
	}
	render() {
    return (
      <div>
        <button onClick={deal}>
          Deal cards
        </button>
        {' '}
        <button onClick={() => hit('player')}>
          Hit
        </button>
        {' '}
        <button onClick={stand}>
          Stand
        </button>
        {' '}
        <button onClick={new_deck}>
          Refresh deck
        </button>
        <h1> {status} </h1>
      </div>
    )
  }
}

export default Controller