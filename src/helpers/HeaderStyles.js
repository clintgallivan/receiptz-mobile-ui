import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: Colors.primary,
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowColor: "rgba(215,215,215,0.5)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
});

export default styles;
