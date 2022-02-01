import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: Colors.white,
    // backgroundColor: 'yellow',
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
  textInputStyle: {
    color: Colors.inputTextColor,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 13,
    padding: 10,
  },
  entryContainer: {
    // flex: 0,
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
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: Colors.signupButton,
    borderRadius: 4,
  },
  login: {
    alignSelf: 'stretch',
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: Colors.signupButton,
    marginTop: 23,
  },
  signupText: {
    color: Colors.white,
    opacity: 1,
    fontSize: 12,
    textAlignVertical: 'bottom',
    textDecorationLine: 'underline',
  },
  textRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  textRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    alignSelf: 'stretch',
    marginHorizontal: -10,
  },
  createAccountBold: {
    color: Colors.primaryText,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 11,
  },
  createAccount: {
    color: Colors.primaryText,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 11,
  },
});

export default styles;
