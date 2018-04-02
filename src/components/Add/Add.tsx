import * as React from 'react';
import { connect } from 'react-redux';

class Add extends React.Component<any, any> {
  render() {
    return (
      <div className="Add">
        Add 
      </div>
    );
  }
}

export default connect()(Add);