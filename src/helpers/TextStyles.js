import {modalStyles} from 'components/Home/styles';
import {StyleSheet} from 'react-native';
import Colors from '../helpers/Colors';

const styles = StyleSheet.create({
  lightTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
  },
  textField: {
    fontSize: 15,
    fontWeight: 'normal',
    color: Colors.white,
  },
  fieldTitle: {
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'center',
    fontFamily: 'AvenirNext-Regular',
    color: Colors.white,
  },
  error: {
    fontSize: 14,
    color: Colors.red,
    fontFamily: 'AvenirNext-Regular',
  },
});

export default styles;
