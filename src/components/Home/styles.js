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

const modalStyles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: 'center',
    // marginTop: 100,
    // alignItems: 'center',
    // marginTop: 100,
    // backgroundColor: 'black',
    // opacity: 0.5,
  },
  modalContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 20,
    // marginBottom: 200,
    marginHorizontal: 20,
    // backgroundColor: 'black',
  },
  modalView: {
    flex: 1,
    // margin:
    // marginTop: 20,
    // marginHorizontal: 30,
    // marginBottom: 100,
    marginVertical: 20,
    backgroundColor: Colors.inputBackground,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
  },

  lineItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  touchable: {
    // backgroundColor: 'black',
    // marginVertical: 50,
    // flex: 1,
    // borderRadius: 20,
    // flexGrow: 1,
    // flex: 1,
  },
});

export {modalStyles};
export {styles};
