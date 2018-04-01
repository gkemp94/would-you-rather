import * as React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import PollList from '../PollList/PollList';
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
        {!loggedIn ? (<Login />) : (<PollList />)}
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