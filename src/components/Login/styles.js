import { StyleSheet } from 'react-native';
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
    backgroundColor: Colors.secondary,
    padding: 10,
  },
  entryContainer: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    alignContent: 'space-between',
    marginVertical: 40,
    padding: 40,
    justifyContent: 'space-evenly',
  //  backgroundColor: Colors.gray,
  },
  login: {
    alignSelf: 'stretch',
    marginTop: 70,
    marginHorizontal: 20
  },
});

export default styles;
