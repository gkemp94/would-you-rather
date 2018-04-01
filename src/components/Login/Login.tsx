import * as React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import './Login.css';

class Login extends React.Component {
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
            <div className="pt-control-group pt-vertical">
                <div className="pt-input-group">
                    <span className="pt-icon pt-icon-person"/>
                    <input type="text" className="pt-input" placeholder="Username" />
                </div>
                <button className="pt-button pt-intent-primary">Login</button>
            </div>
        </Card>
      </div>
    );
  }
}

export default Login;
