import * as React from 'react';
import { connect } from 'react-redux';
import { askQuestion } from '../../actions/questions';

import './Add.css';

interface MappedState {
  authedUser: string;
}

class Add extends React.Component<any, any> {
  state = {
    optionOne: '',
    optionTwo: ''
  };

  handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    let {optionOne, optionTwo} = this.state;
    let { authedUser } = this.props;
    this.props.dispatch(askQuestion(optionOne, optionTwo, authedUser));
    this.setState({
      optionOne: '',
      optionTwo: ''
    });
  }

  render() {
    let {optionOne, optionTwo} = this.state;
    return (
      <div className="Add">
        <h3> Ask Another Question </h3>
        <h4> Would you rather...</h4>
        <form onSubmit={(e: React.MouseEvent<HTMLFormElement>) => this.handleSubmit(e)}> 
          <label className="pt-label .modifier">
            Option One
            <span className="pt-text-muted">(required)</span>
            <input 
              className="pt-input" 
              type="text"
              value={optionOne}
              name="optionOne" 
              placeholder="Option One" 
              dir="auto"
              onChange={(e) => this.setState({optionOne: e.target.value})}
            />
          </label>
          <label className="pt-label .modifier">
            Option Two
            <span className="pt-text-muted">(required)</span>
            <input 
              className="pt-input" 
              type="text"
              value={optionTwo}
              name="optionTwo" 
              placeholder="Option Two" 
              dir="auto" 
              onChange={(e) => this.setState({optionTwo: e.target.value})}
            />

          </label>
          <button className="pt-button pt-intent-primary">
          Ask! 
          </button>
        </form>
      </div>
    );
  }
}
function mapStateToProps({authedUser}: MappedState) {
  return {
      authedUser: authedUser,
  };
}

export default connect(mapStateToProps)(Add);