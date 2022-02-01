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

const FinishedReset = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.finishedText}>New Password has been set!</Text>
        </View>
      </View>
    </View>
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

FinishedReset.navigationOptions = ({navigation}) => {
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

export default FinishedReset;
