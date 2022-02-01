import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';

const SignupButton = props => (
  <TouchableOpacity {...props} style={[styles.button, props.style]}>
    <Text style={[TextStyles.fieldTitle, props.textStyle]}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f8d26d',
    // borderColor: Colors.white,
    // borderWidth: 2,
    // marginTop: 10,
    padding: 5,
    height: 36,
    borderRadius: 4,
  },
});

SignupButton.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
};

SignupButton.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};

export default SignupButton;
