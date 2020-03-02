import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'space-between',
    //marginTop: 20,
    backgroundColor: 'transparent',
  },
  displayImage: {
    //top: 0,
    //left: 0,
    width: 132,
    height: 132,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    //position: "absolute",
  },
  displayButton: {
    //top: 0,
    //left: 0,
    width: 132,
    height: 132,
    backgroundColor: Colors.black,//'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //position: "absolute",
  },
  displayName: {
  
    //top: 0,
    //left: 0,
    //width: 132,
    //height: 132,
    backgroundColor: 'transparent',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    margin: 10,
    //paddingBottom: 30,


    //position: "absolute",
  },
  userName: {
    fontSize: 22,
    textAlign: "center",
    textAlignVertical: "top",
    fontWeight: 'normal',
    color: Colors.darkGray
  },
  logout: {
    fontSize: 12,
    textAlign: "center",
    textAlignVertical: "bottom",
    fontWeight: 'normal',
    color: Colors.darkGray
  },
  profileHeader: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'transparent',
    paddingTop: 10,

  },
  dataHeaders: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.primary,
    padding: 10,
    paddingLeft: 20,

  }
});

export default styles;
