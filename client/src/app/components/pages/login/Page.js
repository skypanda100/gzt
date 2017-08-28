import React from 'react';
import Title from 'react-title-component';
import Login from './Login';
import Paper from 'material-ui/Paper';

const divStyle = {
    textAlign: 'center',
};

const paperStyle = {
    height: '100%',
    width: '35%',
    margin: '200px',
    padding: 0,
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign:'middle',
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
