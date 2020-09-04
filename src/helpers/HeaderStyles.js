import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: Colors.white,
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowColor: "rgba(215,215,215,0.5)",
    shadowOpacity: 1,
    shadowRadius: 5, 
  },
});

export default styles;
