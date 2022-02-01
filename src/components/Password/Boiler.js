import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import LoginButton from '../common/LoginButton';
import TextField from '../common/TextField';

import styles from './Styles';
import strings from 'localization';
import Colors from '../../helpers/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Boiler = props => {
  const SecondaryInput = () => {
    if (props.secondaryInputRender === true) {
      return (
        <View style={styles.formContainer}>
          <TextField
            style={styles.textInputStyle}
            placeholder={'Re-enter Password'}
            placeholderTextColor={Colors.inputTextColor}
            // onChangeText={emailChanged}
            // value={email}
          />
        </View>
      );
    } else {
      return <View />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name={'locked'} size={68} color={'white'} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.primaryText}>{props.primaryText}</Text>
          <Text style={styles.secondaryText}>{props.secondaryText}</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.formContainer}>
            <TextField
              style={styles.textInputStyle}
              placeholder={props.primaryTextInput}
              placeholderTextColor={Colors.inputTextColor}
              // onChangeText={emailChanged}
              // value={email}
            />
          </View>
          <SecondaryInput />
          {/* <View style={styles.formContainer}>
            <TextField
              style={styles.textInputStyle}
              placeholder={'Re-enter Password'}
              placeholderTextColor={Colors.inputTextColor}
              // onChangeText={emailChanged}
              // value={email}
            />
          </View> */}
          <LoginButton
            style={styles.signup}
            title={'Submit'}
            textStyle={{color: Colors.primaryText}}
            onPress={props.submit}
            // title={isLoading ? strings.loading : strings.login}
          />
        </View>
        <View style={styles.floorContainer}>
          <TouchableOpacity style={styles.contactUs}>
            <Text
              style={{
                margin: 7,
                color: Colors.white,
                fontFamily: 'AvenirNext-Regular',
                fontSize: 12,
              }}>
              Need Help? Contact Us
            </Text>
          </TouchableOpacity>
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

Boiler.navigationOptions = ({navigation}) => {
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
        onPress={() => navigation.pop()}>
        <Feather name="arrow-left" size={20} color={Colors.white} />
        <Text style={navStyles.headerLeft}>Back to Login</Text>
      </TouchableOpacity>
    ),
  };
};

export default Boiler;
