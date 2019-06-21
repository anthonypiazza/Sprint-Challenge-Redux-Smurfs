import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

class App extends Component {
  //added CDM lifecycle event to ensure proper GET request 
  //to dispatch the GET action to the reducer -> called getSmurfs ACTION CREATOR (this.props)
  componentDidMount(){
    this.props.getSmurfs()
  }

  //render form
  //render Loading screen if redux store state value of FETCHING is TRUE 
  //else render Smurfs passing smurfs data down from mSTP
  render() {
    return (
      <div className="App">
        <SmurfForm />
        {this.props.fetching ? <h2> Loading ... </h2> : <Smurfs smurfs={this.props.smurfs} />}
      </div>
    );
  }
}

//define mSTP to tell connect which pieces of state to bring to component
//takes state as param and returns object 
//( keys passed to this.props | values are data we want from the store )
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    err: state.err
  }
}

//connect App to Redux store, pass in mSTP and pass in getSmurfs ACTION CREATOR component
export default connect(mapStateToProps, { getSmurfs })(App);
