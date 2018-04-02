import * as React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import Main from '../Main/Main';
import Login from '../Login/Login';
import './App.css';

interface State {
  authedUser: string;
}

interface MappedState {
  loggedIn: boolean;
}

class App extends React.Component<any, any> { // TODO: Fix this issue...
  
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    let { loggedIn } = this.props;
    return (
      <div className="App">
        {!loggedIn ? (<Login />) : (<Main />)}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }: State): MappedState {
  return {
    loggedIn: authedUser != null,
  };
}

export default connect(mapStateToProps)(App);

// TODO: Fix Typescript Error