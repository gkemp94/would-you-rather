import * as React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import PollList from '../PollList/PollList';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<any> { // TODO: Fix this issue...
  
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <PollList />
      </div>
    );
  }
}

export default connect()(App);

// TODO: Fix Typescript Error