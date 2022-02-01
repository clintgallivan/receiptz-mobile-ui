import {StyleSheet} from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 20,
    backgroundColor: 'transparent',
    marginBottom: 25,
  },

  listButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'stretch',
    paddingHorizontal: 31,
  },
  line: {
    backgroundColor: Colors.gray,
    marginTop: 2,
    height: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginHorizontal: 31,
  },
  headerPrimaryStyle: {
    color: '#233064',
    // opacity: 1,
    fontSize: 17,
    textAlign: 'left',
    fontFamily: 'AvenirNext-Bold',
  },
  headerSecondaryStyle: {
    color: '#C4C4C4',
    opacity: 1,
    fontSize: 11,
    textAlign: 'left',
    marginTop: 7,
    fontFamily: 'AvenirNext-Regular',
  },
});

export default styles;
