import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import transitions from 'material-ui/styles/transitions';
import {grey200} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

class Feature extends Component {

  static propTypes = {
    firstChild: PropTypes.bool,
    lastChild: PropTypes.bool,
    width: PropTypes.number.isRequired,
    w: PropTypes.string,
  };

  static defaultProps = {
    firstChild: false,
    lastChild: false,
  };

  state = {
    zDepth: 1,
  };

  getStyles() {
    const desktopGutter = spacing.desktopGutter;
    const desktopKeylineIncrement = spacing.desktopKeylineIncrement;
    const styles = {
      root: {
        transition: transitions.easeOut(),
        maxWidth: '100%',
        margin: `0 auto ${desktopGutter}px auto`,
      },
      rootWhenMedium: {
        float: 'left',
        width: `${this.props.w}`,
        marginRight: 4,
        marginBottom: 0,
        marginTop: '1%',
      },
      rootWhenLastChild: {
        marginBottom: 0,
      },
      rootWhenMediumAndLastChild: {
        marginRight: 0,
        marginBottom: 0,
      },
      rootWhenMediumAndFirstChild: {
        marginLeft: 0,
      },
    };

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.root = Object.assign(
        styles.root,
        styles.rootWhenMedium,
        this.props.firstChild && styles.rootWhenMediumAndFirstChild,
        this.props.lastChild && styles.rootWhenMediumAndLastChild
      );
    }

    return styles;
  }

  render() {
    const styles = this.getStyles();
    let content = this.props.children;

    return (
      <Paper
        zDepth={this.state.zDepth}
        style={Object.assign(
          styles.root,
          this.props.lastChild && styles.rootWhenLastChild
        )}
      >
          {content}
      </Paper>
    );
  }
}

export default withWidth()(Feature);
