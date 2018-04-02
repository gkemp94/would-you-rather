import * as React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import PollList from '../PollList/PollList';

class Main extends React.Component<any> {
  render() {
    return (
      <div className="/">
        <Navbar />
        <PollList />
      </div>
    );
  }
}

export default connect()(Main);
