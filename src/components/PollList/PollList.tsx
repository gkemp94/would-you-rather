import * as React from 'react';
import { connect } from 'react-redux';

import { Question } from '../../models/Question';

import './PollList.css';

interface State {
    questions: Question[];
}

class PollList extends React.Component<any> { // TODO: Fix this issue...
  
  render() {
    let { questionIds } = this.props;
    return (
      <div className="PollList">
        {questionIds.map((questionId: string) => (
            <div key={questionId}>
                {questionId}
            </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({questions}: State) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    };
}

export default connect(mapStateToProps)(PollList);

// TODO: Fix Typescript Error