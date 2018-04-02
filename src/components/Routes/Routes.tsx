import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import PollList from '../PollList/PollList';
import Leaderboard from '../Leaderboard/Leaderboard';
import Add from '../Add/Add';

class Routes extends React.Component<any> {
  render() {
    return (
      <div className="Routes">
          <Switch>
            <Route
              path="/add" 
              render={() => (
                <Add />
              )}
            />
            <Route
              path="/leaderboard" 
              render={() => (
                <Leaderboard />
              )}
            />
            <Route
              exact={true}
              path="/" 
              render={() => (
                <PollList />
              )}
            />
        </Switch>
      </div>
    );
  }
}

export default Routes;