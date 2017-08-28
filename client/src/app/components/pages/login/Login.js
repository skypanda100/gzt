import React, {Component} from 'react';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {

    state = {
      usr:"",
      pwd:"",
    };

    loginHandle = (event) => {
      alert(this.state.usr);
    }

    textHandleChange = (event) => {
        let value = event.target.value;
        if (event.target.id == "usr") {
            this.setState({
                usr: value,
            });
        } else if (event.target.id == "pwd") {
            this.setState({
                pwd: value,
            });
        }
    }

    render() {

      return (
        <div>
          <TextField
              id="usr"
              floatingLabelText="user"
              style={{width:'80%'}}
              value={this.state.usr}
              onChange={this.textHandleChange}
          />
          <br/>
          <TextField
              id="pwd"
              floatingLabelText="password"
              style={{width:'80%'}}
              value={this.state.pwd}
              onChange={this.textHandleChange}
              type="password"
          />
          <br/>
          <br/>
          <div>
            <RaisedButton
                label="Login"
                primary={true}
                style={{width:'80%'}}
                onTouchTap={this.loginHandle}
            />
          </div>
        </div>
      );
    }
}

export default withWidth()(Login);
