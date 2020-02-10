import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  row: {
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 25
  },
  buttonList: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  receiptInfo: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  nameOfStore: {
    color: Colors.black,
    opacity: 1,
    fontSize: 16,
    textAlign: "left"
  },
  dateOfPurchase: {
    color: Colors.black,
    opacity: 1,
    fontSize: 12,
    textAlign: "left",
    marginTop: 4
  },
  viewText: {
    color: Colors.primary,
    opacity: 1,
    fontSize: 12,
    textAlignVertical: "bottom"
  },
  line: {
    backgroundColor: Colors.gray,
    marginTop: 2,
    height: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

export default styles;
