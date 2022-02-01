import React from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
// import { Header } from "react-native/Libraries/NewAppScreen";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {vw, vh} from 'react-native-viewport-units';
import YellowButton from '../common/YellowButton';
import Swiper from 'react-native-swiper';
// import {createAppContainer} from 'react-navigation';
import Geolocation from '@react-native-community/geolocation';
import TwoButtonAlert from './TwoButtonAlert.js';

const Onboarding = ({navigation}) => {
  const findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        TwoButtonAlert();
        // const result = JSON.stringify(position);
        // const latitude = JSON.stringify(position.coords.latitude);
        // const longitude = JSON.stringify(position.coords.longitude);
      },
      // (error) => Alert.alert('yo'),
      error => TwoButtonAlert(),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  return (
    <View style={styles.background}>
      <Swiper
        dotColor="#C4C4C4"
        activeDotColor="#233064"
        paginationStyle={{position: 'absolute', bottom: 63}}
        loop={false}
        bounces={true}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../../assets/im_onboarding/Onboarding1Pic1.png')}
              // marginTop={42}
            />
          </View>
          <View style={styles.bigTextContainer}>
            <Text style={styles.bigText}>Receive Receipts Instantly</Text>
          </View>
          <View style={styles.smallTextContainer}>
            <Text style={styles.smallText}>
              Automatically receive digital receipts from partnering POS systems
              within seconds of your transaction.
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.imageContainer} marginTop={82}>
            <Image
              source={require('../../assets/im_onboarding/Onboarding1Pic2.png')}
              // marginTop={42}
            />
          </View>
          <View style={styles.bigTextContainer}>
            <Text style={styles.bigText}>Find Receipts Easily</Text>
          </View>
          <View style={styles.smallTextContainer}>
            <Text style={styles.smallText}>
              Whether you need to make a return or split a purchase, locate your
              receipts easily in your receipt wallet.
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/im_onboarding/Onboarding1Pic3.png')}
              // marginTop={42}
            />
          </View>
          <View style={styles.bigTextContainer}>
            <Text style={styles.bigText}>Plant a Tree!</Text>
          </View>
          <View style={styles.smallTextContainer}>
            <Text style={styles.smallText}>
              For every 20 receipts received, Receiptz will plant a tree!
            </Text>
          </View>
        </View>
      </Swiper>
      <YellowButton
        onPress={() => {
          navigation.navigate('Login');
          findCoordinates();
        }}
        text={"Let's Get Started"}
      />
    </View>
  );
};

// const deviceWidth = 375; //! place an object here instead of a static #

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },

  imageContainer: {
    position: 'absolute',
    marginTop: 60,
    // backgroundColor: "teal",
  },

  bigText: {
    color: '#233064',
    textAlign: 'center',
    // height: 50,
    fontFamily: 'AvenirNext-Bold',
    fontSize: (vw * 24) / vw, //* fontSize: 14 --or-- fontSize:  deviceWidth * ().0373 || ~14/375),
    // marginTop: 42,
    height: 33,
    // backgroundColor: "teal",
  },
  smallText: {
    textAlign: 'center',
    color: '#606060',
    // height: 50,
    fontFamily: 'AvenirNext-Regular',
    fontSize: (vw * 14) / vw, //* fontSize: 14 --or-- fontSize:  deviceWidth * ().0373 || ~14/375),
    marginHorizontal: 27,
    // marginBottom: 43,
    // backgroundColor: "blue",
    height: 66,
    width: 321,
  },

  smallTextContainer: {
    position: 'absolute',
    marginTop: 526,
  },

  bigTextContainer: {
    position: 'absolute',
    marginTop: 463,
  },

  image: {
    // align: 'center',
  },

  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  swiper: {
    // position: "absolute",
    // marginTop: 100
  },
});

Onboarding.navigationOptions = {
  header: null,
};

export default Onboarding;
