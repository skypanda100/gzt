import React, {Component} from 'react';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {cyan500, lightWhite, darkWhite, black} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import {
    hashHistory,
} from 'react-router';
import Cookies from 'js-cookie';

const styles = {
    h1: {
        color: black,
        fontSize: 30,
        marginTop: '50px',
    },
    tagline: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: 575,
    },
    divStyle: {
        top: '64px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        position:'absolute',
        textAlign: 'center',
        backgroundColor: cyan500,
    },
    nowrap: {
        whiteSpace: 'nowrap',
    },
    underlineStyle: {
        borderColor: lightWhite,
    },
    underlineFocusStyle: {
        borderColor: darkWhite,
    },
    floatingLabelStyle: {
        color: lightWhite,
    },
    floatingLabelFocusStyle: {
        color: darkWhite,
    },
    paperStyle: {
        width: '500px',
        marginTop: '100px',
        padding: 5,
        textAlign: 'center',
        display: 'inline-block',
        verticalAlign:'middle',
    },
};

class Login extends Component {

    state = {
      usr:"",
      pwd:"",
    };

    loginHandle = (event) => {
        if(this.state.usr == 'ggzdttt' && this.state.pwd == 'ggTT1206'){
            Cookies.set('usr', this.state.usr);
            Cookies.set('pwd', this.state.pwd);
            hashHistory.push('/');
        }
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
        <div style={styles.divStyle}>
          <Paper
              style={styles.paperStyle}
              zDepth={1}
          >
            <div style={styles.tagline}>
              <div style={styles.h1}>GG&ZDT&TT</div>
            </div>
            <br/><br/>
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
                  style={{width:'80%'}}
                  onTouchTap={this.loginHandle}
                  primary={true}
              />
            </div>
            <br/>
            <br/>
          </Paper>
        </div>
      );
    }
}

export default withWidth()(Login);
