import React from 'react';
import PropTypes from 'prop-types';
import {
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

const Button = props => (
  <TouchableOpacity
    {...props}
    style={[styles.button, props.style]}
  >
    <Text
      style={[TextStyles.fieldTitle, props.textStyle]}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};

export default Button;
