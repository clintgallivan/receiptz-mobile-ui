import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';
import Svg, {Path, Circle, Text as SVGText} from 'react-native-svg';

const styles = StyleSheet.create({
  ellipse: {
    flex: 1,
  },
});

const Ellipse = () => (
  <View style={styles.ellipse}>
    <Svg height="31" width="31">
      <Circle cx="15.5" cy="15.5" r="15.5" fill="#41969F" />
    </Svg>
  </View>
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
