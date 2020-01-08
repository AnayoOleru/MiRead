import React from 'react';
import { Switch, Platform } from 'react-native';

import Theme from '../constants/Theme';

class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;
    const thumbColor = Platform.OS === 'ios' ? null :
      Platform.OS === 'android' && value ? Theme.COLORS.SWITCH_ON : Theme.COLORS.SWITCH_OFF;

    return (
      <Switch
        value={value}
        thumbColor={thumbColor}
        ios_backgroundColor={Theme.COLORS.SWITCH_OFF}
        trackColor={{ false: Theme.COLORS.SWITCH_ON, true: Theme.COLORS.SWITCH_ON }}
        {...props}
      />
    );
  }
}

export default MkSwitch;