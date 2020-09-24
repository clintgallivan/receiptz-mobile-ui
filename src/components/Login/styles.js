import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
    backgroundColor: Colors.inputBackground,
    padding: 10,
    borderRadius: 4,
  },
  textInputStyle: {
    color: Colors.inputTextColor,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 12,
  },
  entryContainer: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    alignContent: 'space-between',
    marginVertical: 40,
    padding: 40,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.gray,
  },
  login: {
    alignSelf: 'stretch',
    // marginTop: 70,
    marginHorizontal: 20,
    // backgroundColor: 'blue',
  },
  signup: {
    alignSelf: 'stretch',
    marginTop: 23,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'black',
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
