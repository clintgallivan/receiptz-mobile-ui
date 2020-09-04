import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import strings from 'localization';

import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';

const Saved = () => {
  return (
  <View>
    <Text>Saved Screen</Text>
  </View>
  )
};

Saved.navigationOptions = {
  title: strings.saved,
  headerTitleStyle: {
    color: Colors.topTabText,
    fontFamily: 'AvenirNext-Bold'
  },
  headerStyle: HeaderStyles.appHeader
};

export default Saved;