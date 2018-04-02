import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Elevation } from '@blueprintjs/core';
import { setAuthedUser } from '../../actions/authedUser';
import { User } from '../../models/User';
import './Login.css';

class Login extends React.Component<any> {
  state = {
    username: '',
    userNotFound: false,
  };

  handleSubmit(e: any) {
    e.preventDefault();
    let { users } = this.props;
    let { username } = this.state;
    if (users.indexOf(username) >= 0) {
      this.props.dispatch(setAuthedUser(this.state.username));
    } else {
      this.setState({
        userNotFound: true,
      });
    }
  }

  render() {
    return (
      <div className="Login">
        <Card 
            className="login-card"
            interactive={true} 
            elevation={Elevation.TWO}
        >
            <h4>Would you rather...?</h4>
            <p className="muted">Udacity Nanodegree Project by George Kemp</p>
            {this.state.userNotFound && (
              <div className="user-not-found">
               User Id Not Found...Try Again.
              </div>
            )}
            <form className="pt-control-group pt-vertical" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="pt-input-group">
                    <span className="pt-icon pt-icon-person"/>
                    <input 
                      type="text" 
                      value={this.state.username} 
                      onChange={(e) => this.setState({username: e.target.value})} 
                      className="pt-input" 
                      placeholder="Username" 
                    />
                </div>
                <button 
                  className="pt-button pt-intent-primary" 
                >
                  Login
                </button>
            </form>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users }: {users: User[]}) {
  return {
    users: Object.keys(users)
  };
}

export default connect(mapStateToProps)(Login);
