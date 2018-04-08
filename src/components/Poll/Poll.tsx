import * as React from 'react';
import { connect } from 'react-redux';
import { User } from '../../models/User';
import { Link } from 'react-router-dom';
import { Question } from '../../models/Question';
import { Card, Elevation, Button } from '@blueprintjs/core';
import { answerQuestion } from '../../actions/questions';
import { formatDate } from '../../utils/helpers';
import './Poll.css';

interface State {
    questions: Question[];
    authedUser: string;
    users: User[];
}

class Poll extends React.Component<any> {
    handleSubmit(e: React.MouseEvent<HTMLAnchorElement>, option: string) {
        this.props.dispatch(answerQuestion(this.props.match.params.id, this.props.authedUser, option));
    }

    render() {
        let pollId = this.props.match.params.id;
        let poll: Question = this.props.questions[pollId];
        if (!poll) {
         return (
             <div className="404">
             <h2>404 Error...This question doesn't seem to exist...</h2>
             <h3> How about you go<Link to="/add"> ask it?</Link> </h3>
             </div>
         );   
        }
        let optOneVotes: number = poll.optionOne.votes.length;
        let optTwoVotes: number = poll.optionTwo.votes.length;
        let totalVotes: number = optOneVotes + optTwoVotes;
        let optOnePercent: string = optOneVotes / totalVotes * 100 + '%';
        let optTwoPercent: string = optTwoVotes / totalVotes * 100 + '%';
        let answer: string = this.props.users[this.props.authedUser].answers[pollId];
        let author: User = this.props.users[poll.author]; 
        return (
            <div className="Poll">
                    <Card 
                        elevation={Elevation.TWO}
                        className="question-card"
                    >
                        <h5>
                            Would you rather&nbsp;
                            {poll.optionOne.text} or&nbsp; 
                            {poll.optionTwo.text}? 
                        </h5>
                        <p> 
                            <img className="user-avatar" src={author.avatarURL}/> 
                            Asked by {poll.author} on {formatDate(poll.timestamp)} 
                        </p>
                        {answer && (
                            <div>
                                <p>
                                    {optOneVotes} ({optOnePercent})&nbsp;
                                    said they would rather {poll.optionOne.text} wheras&nbsp;
                                    {optTwoVotes} ({optTwoPercent}) said they would rather {poll.optionTwo.text}. 
                                </p>
                                <p>
                                    You would rather {poll[answer].text}.
                                </p>
                            </div>
                        )}
                        {!answer && (
                            <div>
                                <p>
                                    <Button onClick={(e: any) => this.handleSubmit(e, 'optionOne')}>
                                        {poll.optionOne.text} 
                                    </Button>
                                    <Button onClick={(e: any) => this.handleSubmit(e, 'optionTwo')}>
                                        {poll.optionTwo.text} 
                                    </Button>
                                </p>
                            </div>
                        )}

                    </Card>
            </div>
        );
    }
}

function mapStateToProps({questions, authedUser, users}: State) {
    return {
        questions: questions,
        authedUser: authedUser,
        users: users,
    };
}

export default connect(mapStateToProps)(Poll);