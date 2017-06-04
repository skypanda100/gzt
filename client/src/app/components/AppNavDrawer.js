import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {spacing, typography, zIndex} from 'material-ui/styles';
import {cyan500} from 'material-ui/styles/colors';

const SelectableList = makeSelectable(List);

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: cyan500,
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8,
  },
  version: {
    paddingLeft: spacing.desktopGutterLess,
    fontSize: 16,
  },
};

class AppNavDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onChangeList: PropTypes.func.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  componentDidMount() {
  }

  handleRequestChangeLink = (event, value) => {
    window.location = value;
  };

  handleTouchTapHeader = () => {
    this.context.router.push('/');
    this.props.onRequestChangeNavDrawer(false);
  };

  render() {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.drawer - 100}}
      >
        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          GZT
        </div>
        <SelectableList
          value={location.pathname}
          onChange={onChangeList}
        >
          <ListItem
            primaryText="Sleep"
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem primaryText="Comparison By Day" value="/sleep/comparison_by_day" />,
                <ListItem primaryText="Comparison By Week" value="/sleep/comparison_by_week" />,
                <ListItem primaryText="Comparison By Month" value="/sleep/comparison_by_month" />
            ]}
          />
        </SelectableList>
        <Divider />
        <SelectableList
          value=""
          onChange={this.handleRequestChangeLink}
        >
          <Subheader>Resources</Subheader>
          <ListItem primaryText="GitHub" value="https://github.com/skypanda100/gzt" />
          <ListItem primaryText="React" value="http://facebook.github.io/react" />
          <ListItem primaryText="Material-UI" value="https://github.com/callemall/material-ui" />
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;
