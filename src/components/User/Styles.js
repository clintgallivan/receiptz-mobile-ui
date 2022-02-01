import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'stretch',
    // marginTop: 20,
    // backgroundColor: 'transparent',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // marginBottom: 50
    // alignSelf: 'stretch'

    // alignItems: 'stretch',
    // marginTop: 20,
    // backgroundColor: 'transparent',
  },

  totals: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
    
    
  },
  line: {
    backgroundColor: Colors.gray,
    // marginTop: 2,
    height: 50,
    width: 3,
    // flexDirection: 'column',
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'AvenirNext-Bold',
    color: '#233064',
    fontSize: 24,
  },
  subText: {
    fontFamily: 'AvenirNext-Regular',
    color: '#606060',
    fontSize: 11,
  },
});

export default styles;
