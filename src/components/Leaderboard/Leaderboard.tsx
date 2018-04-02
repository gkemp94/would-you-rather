import * as React from 'react';
import { connect } from 'react-redux';

class Leaderboard extends React.Component<any, any> {
  render() {
    return (
      <div className="Leaderboard">
        Leaderboard 
      </div>
    );
  }
}

export default connect()(Leaderboard);