import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HomeFeature from './HomeFeature';
import FullWidthSection from '../FullWidthSection';
import RaisedButton from 'material-ui/RaisedButton';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';

class HomePage extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  homeFeatures() {
    const styles = {maxWidth: 906};

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <HomeFeature
          heading="Sleep"
          route="/sleep"
          img="images/gzt_sleep.jpg"
          firstChild={true}
        />
        <HomeFeature
          heading="Track"
          route="/track"
          img="images/gzt_track.jpg"
        />
        <HomeFeature
          heading="Other"
          route="/other"
          img="images/gzt_other.jpg"
          lastChild={true}
        />
      </FullWidthSection>
    );
  }

  homeContribute() {
    const styles = {
      root: {
        backgroundColor: grey200,
        textAlign: 'center',
      },
      h3: {
        margin: 0,
        padding: 0,
        fontWeight: typography.fontWeightLight,
        fontSize: 22,
      },
      button: {
        marginTop: 32,
      },
    };

    return (
      <FullWidthSection useContent={true} style={styles.root}>
        <h3 style={styles.h3}>
          Want to help make this <span style={styles.nowrap}>project awesome? </span>
          <span style={styles.nowrap}>Check out our repo.</span>
        </h3>
        <RaisedButton
          label="GitHub"
          primary={true}
          href="https://github.com/skypanda100/gzt"
          style={styles.button}
        />
      </FullWidthSection>
    );
  }

  render() {
    const style = {
      paddingTop: spacing.desktopKeylineIncrement,
    };

    return (
      <div style={style}>
        {this.homeFeatures()}
        {this.homeContribute()}
      </div>
    );
  }
}

export default withWidth()(HomePage);
