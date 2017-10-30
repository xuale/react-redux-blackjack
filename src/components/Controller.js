import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { statuses } from '../reducers/index';


class Controller extends Component {
	constructor() {
		super();
    this.state = {status: 'Playing'};
	}
  componentWillReceiveProps(nextProps) {
    this.setState({status: nextProps.status});
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
        <h1> {this.state.status} </h1>
      </div>
    )
  }
}

export default Controller

const mapStateToProps = (state) => {
      status: state.status
};

export default connect(mapStateToProps)(Controller)