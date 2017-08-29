import React from 'react';
import Title from 'react-title-component';
import Login from './Login';
import Paper from 'material-ui/Paper';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';

const divStyle = {
    textAlign: 'center',
    backgroundColor: cyan500,
    overflow: 'hidden',
};

const paperStyle = {
    height: '100%',
    width: '100%',
};

const LoginPage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Login - ${previousTitle}`} />
      <Paper
          style={paperStyle}
          zDepth={0}
      >
          <Login />
      </Paper>
  </div>
);

export default LoginPage;
