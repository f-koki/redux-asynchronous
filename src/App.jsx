import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App({ count, onIncrementClick }) {
  (
    <div className="App">
      <span>{count}</span>
      <button onClick={onIncrementClick}>increment</button>
    </div>
  )
}

export default connect(
  state => {
    return { count: state.count }
  },
  dispatch => {
    return {
      onIncrementClick: () => {
        dispatch({ type: 'INCREMENT' })
      }
    }
  }
)(App);
