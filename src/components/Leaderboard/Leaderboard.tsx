import * as React from 'react';
import { connect } from 'react-redux';
import { User } from '../../models/User';
import { Question } from '../../models/Question';
import './Leaderboard.css';

interface MappedState {
  questions: Question[];
  authedUser: string;
  users: User[];
}

class Leaderboard extends React.Component<any, any> {
  render() {
    let users = Object.keys(this.props.users).map((key) => this.props.users[key])
                  .sort((b, a) => (Object.keys(a.answers).length + a.questions.length) - 
                    (Object.keys(b.answers).length + b.questions.length));
    return (
      <div className="Leaderboard">
      <h2> Leaderboard </h2>
        {users.map((user, index) => (
          <div key={user.id} className="leaderboard-item">
            <h4>{index + 1}.  <img className="user-avatar" src={user.avatarURL}/> {user.name}</h4>
            <h6>Answered: {Object.keys(user.answers).length} </h6>
            <h6>Asked: {user.questions.length} </h6>
            <h6>Total: {Object.keys(user.answers).length + user.questions.length} </h6>
          </div>
        ))} 
      </div>
    );
  }
}

function mapStateToProps({questions, authedUser, users}: MappedState) {
  return {
      questions: questions,
      authedUser: authedUser,
      users: users,
  };
}

export default connect(mapStateToProps)(Leaderboard);