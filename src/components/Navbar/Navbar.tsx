import * as React from 'react';
import { connect } from 'react-redux';
import { User } from '../../models/User';
import './Navbar.css';

import { Dialog, Button, Intent } from '@blueprintjs/core';
import { logoutUser } from '../../actions/authedUser';

class Navbar extends React.Component<any, any> {

  state = {
    isOpen: false,
  };

  toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });
  logout = () => this.props.dispatch(logoutUser());
  render() {
    let { users, authedUser } = this.props;
    let user: User = users[authedUser];
    return (
      <nav className="pt-navbar .modifier">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Would You Rather...?</div>
        </div>
        <div className="pt-navbar-group pt-align-right">
          <button className="pt-button pt-minimal pt-icon-home"/>
          <button className="pt-button pt-minimal pt-icon-add">New Poll</button>
          <button className="pt-button pt-minimal pt-icon-trending-up">Leaderboard</button>
          <span className="pt-navbar-divider"/>
          <button className="pt-button pt-minimal" onClick={this.toggleDialog}>
            <img className="user-avatar" src={user.avatarURL}/>
            <span className="user-name">{user.name}</span>
          </button>
        </div>
        <Dialog
            isOpen={this.state.isOpen}
            onClose={this.toggleDialog}
            title={user.name}
        >
            <div className="pt-dialog-body">
              <p>Questions Asked: {Object.keys(user.questions).length}</p>
              <p>Questions Answered: {Object.keys(user.answers).length}</p>
            </div>
            <div className="pt-dialog-footer">
                <div className="pt-dialog-footer-actions">
                    <Button text="Close" onClick={this.toggleDialog} />
                    <Button
                        intent={Intent.DANGER}
                        onClick={this.logout}
                        text="Logout"
                    />
                </div>
            </div>
        </Dialog>
      </nav>
    );
  }
}

function mapStateToProps({authedUser, users}: {authedUser: string, users: User[]}) {
  return {
    authedUser: authedUser,
    users: users,
  };
}

export default connect(mapStateToProps)(Navbar);