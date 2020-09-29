import {StyleSheet, YellowBox} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.white,
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
  fillerFormContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
    // backgroundColor: Colors.inputBackground,
    // padding: 10,
    borderRadius: 4,
  },
  textInputStyle: {
    color: Colors.inputTextColor,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 13,
    padding: 10,
  },
  entryContainer: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    alignContent: 'space-between',
    marginVertical: 40,
    padding: 40,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.white,
  },
  signup: {
    alignSelf: 'stretch',
    marginTop: 80,
    alignItems: 'center',
    backgroundColor: Colors.signupButton,
  },
  login: {
    alignSelf: 'stretch',
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: Colors.signupButton,
    color: 'blue',
  },
  signupText: {
    color: Colors.white,
    opacity: 1,
    fontSize: 12,
    textAlignVertical: 'bottom',
    textDecorationLine: 'underline',
  },
});

export default styles;
