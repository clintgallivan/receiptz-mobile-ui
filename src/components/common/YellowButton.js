import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {vw, vh} from 'react-native-viewport-units';
import {NavigationActions} from 'react-navigation';
// import LoginScreen from "../screens/LoginScreen";

const YellowButton = ({onPress, text}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

// const deviceWidth = 375; //! place an object here instead of a static #

const styles = StyleSheet.create({
  buttonContainer: {
    // marginHorizontal: 30,
    // marginTop: 72,
    // justifyContent: "center",
    alignItems: 'center',
    marginBottom: 70,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8D26D',
    borderRadius: 4,
    width: 304,
    height: 36,
  },

  buttonText: {
    color: '#FFFFFF',
    // height: 50,
    fontFamily: 'AvenirNext-Medium',
    fontSize: (vw * 14) / vw, //* fontSize: 14 --or-- fontSize:  deviceWidth * ().0373 || ~14/375),
  },
});

export default YellowButton;
