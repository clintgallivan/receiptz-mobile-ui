import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import strings from 'localization';

import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';

const User = () => {
  return (
  <View>
    <Text>User Screen</Text>
  </View>
  )
};

User.navigationOptions = {
  title: strings.profile,
  headerTitleStyle: {
    color: Colors.topTabText,
    fontFamily: 'AvenirNext-Bold'
  },
  headerStyle: HeaderStyles.appHeader
};

export default User;