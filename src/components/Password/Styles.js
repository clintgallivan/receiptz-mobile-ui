import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryText,
    // alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 36,
    alignItems: 'center',
    // margin: 36,
  },
  iconContainer: {
    flex: 1,
    // backgroundColor: 'white',
    justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  inputContainer: {
    flex: 1,
    // backgroundColor: 'white',
    // justifyContent: 'center',
    alignSelf: 'stretch',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  floorContainer: {
    flex: 1,
    // backgroundColor: 'white',
    justifyContent: 'flex-end',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
    backgroundColor: Colors.inputBackground,

    // padding: 10,
    borderRadius: 4,
  },
  primaryText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 24,
  },
  secondaryText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 14,
    fontFamily: 'AvenirNext-Regular',
    // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  finishedText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 24,
    marginBottom: 100,
  },
  textInputStyle: {
    color: Colors.inputTextColor,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 13,
    padding: 10,
  },
  signup: {
    alignSelf: 'stretch',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  contactUs: {
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default styles;
