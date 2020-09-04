import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';
import Svg, { Path, Circle,  Text as SVGText } from "react-native-svg";

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "transparent",
    borderColor: Colors.white,
    borderWidth: 2,
    marginTop: 10,
    padding: 5,
    height: 50,
    borderRadius: 30.5,
  },
});

const Ellipse = () => (
<Svg height="50" width="50">
  <Circle cx="25" cy="25" r="15.5" fill="#41969F" />
</Svg>

);

// Ellipse.propTypes = {
//   style: PropTypes.object,
//   textStyle: PropTypes.object,
//   title: PropTypes.string,
// };

// Ellipse.defaultProps = {
//   style: null,
//   textStyle: null,
//   title: '',
// };

export default Ellipse;
