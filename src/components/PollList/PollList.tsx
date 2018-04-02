import * as React from 'react';
import { connect } from 'react-redux';

import { User } from '../../models/User';
import { Question } from '../../models/Question';

import './PollList.css';

interface State {
    questions: Question[];
    users: User[];
    authedUser: string;
}

class PollList extends React.Component<any> {
    state = {
        filterAnswered: true,
    };

    toggleFilter() {
        this.setState((prevState: any) => ({
            filterAnswered: !prevState.filterAnswered
        }));
    }

    render() {
        let { questionIds, users, authedUser } = this.props;
        let user: User = users[authedUser];
        let answeredQuestions = Object.keys(user.answers);
        let unansweredQuestions = questionIds.filter((questionId: string) => 
            answeredQuestions.indexOf(questionId) === -1);
        let displayQuestions = this.state.filterAnswered ? unansweredQuestions : questionIds;
        return (
            <div className="PollList">
                <label className="pt-control pt-switch .modifier">
                    <input 
                        type="checkbox" 
                        checked={this.state.filterAnswered} 
                        onClick={() => this.toggleFilter()} 
                    />
                    <span className="pt-control-indicator"/>
                    Filter Answered Questions
                </label>
                {displayQuestions.map((questionId: string) => (
                    <div key={questionId}>
                {questionId}
                </div>
                ))}
            </div>
        );
    }
}

function mapStateToProps({questions, authedUser, users}: State) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser: authedUser,
        users,
    };
}

export default connect(mapStateToProps)(PollList);