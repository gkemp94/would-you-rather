import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Elevation } from '@blueprintjs/core';
import { User } from '../../models/User';
import { Question } from '../../models/Question';
import { formatDate } from '../../utils/helpers';
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
        let { questionIds, users, authedUser, questions } = this.props;
        let { filterAnswered } = this.state;
        let user: User = users[authedUser];
        let answeredQuestions = Object.keys(user.answers);
        let unansweredQuestions = questionIds.filter((questionId: string) => 
            answeredQuestions.indexOf(questionId) === -1);
        let displayQuestions = filterAnswered ? unansweredQuestions : questionIds;
        return (
            <div className="PollList">
                <label className="pt-control pt-switch .modifier">
                    <input 
                        type="checkbox" 
                        checked={filterAnswered} 
                        onChange={() => this.toggleFilter()} 
                    />
                    <span className="pt-control-indicator"/>
                    Showing {filterAnswered ? (
                        <span> Unanswered Questions </span>
                    ) : (
                        <span> All Questions </span>
                    )}
                </label>
                {displayQuestions.map((questionId: string) => (
                    <Card 
                        key={questionId} 
                        elevation={Elevation.TWO}
                        className="question-card"
                    >
                        <h5>
                            Would you rather&nbsp;
                            {questions[questionId].optionOne.text} or&nbsp; 
                            {questions[questionId].optionTwo.text}? 
                        </h5>
                        <p className="muted"> 
                            Asked by {questions[questionId].author} on {formatDate(questions[questionId].timestamp)} 
                        </p>
                        <div className="question-footer">
                            <Link to={'/question/' + questionId}>View</Link>
                            {answeredQuestions.indexOf(questionId) === -1 ? (
                                <p><span className="pt-icon-cross"/> Unanswered</p>
                            ) : (
                                <p><span className="pt-icon-tick"/> Answered</p>
                            )}
                            
                        </div>
                    </Card>
                ))}
            </div>
        );
    }
}

function mapStateToProps({questions, authedUser, users}: State) {
    return {
        questions: questions,
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        authedUser: authedUser,
        users,
    };
}

export default connect(mapStateToProps)(PollList);