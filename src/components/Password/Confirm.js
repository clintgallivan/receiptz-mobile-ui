import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import LoginButton from '../common/LoginButton';
import TextField from '../common/TextField';
import Boiler from './Boiler';

import styles from './Styles';
import strings from 'localization';
import Colors from '../../helpers/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import navigation from 'components/navigation';

const Confirm = props => {
  return (
    <Boiler
      submit={() => {
        props.navigation.navigate('Reset');
      }}
      primaryText="Password reset code"
      secondaryText="Please enter 5 digit password reset code from email."
      primaryTextInput="Password reset code"
    />
  );
};

const localStyles = StyleSheet.create({});

const navStyles = StyleSheet.create({
  headerRight: {
    color: '#41969F',
    fontSize: 12,
  },
  headerLeft: {
    color: Colors.white,
    fontSize: 12,
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
    marginLeft: 20,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  headerRightContainer: {
    // flexDirection: 'row',
    // backgroundColor: 'blue',
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

Confirm.navigationOptions = ({navigation}) => {
  return {
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: Colors.primaryText,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
    headerLeft: () => (
      <TouchableOpacity
        style={navStyles.headerLeftContainer}
        onPress={() => navigation.navigate('Login')}>
        <Feather name="arrow-left" size={20} color={Colors.white} />
        <Text style={navStyles.headerLeft}>Back to Login</Text>
      </TouchableOpacity>
    ),
  };
};

export default Confirm;
