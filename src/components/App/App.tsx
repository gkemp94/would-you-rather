import * as React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import { withRouter } from 'react-router-dom';
import Routes from '../Routes/Routes';
import Navbar from '../Navbar/Navbar';
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
        {!loggedIn ? (<Login />) : (
        <div className="container">
          <Navbar />
          <Routes />
        </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }: State): MappedState {
  return {
    loggedIn: authedUser != null,
  };
}

export default withRouter(connect(mapStateToProps)(App) as any);

// TODO: Fix Typescript Error