import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',

    marginTop: 80,
  },
  logo: {
    backgroundColor: 'transparent',
    color: Colors.primaryText,
    opacity: 1,
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'AvenirNext-Bold',
  },
});

const TextField = props => (
  <View style={styles.container}>
    <Text
      {...props}
      style={[styles.logo, props.style]}
      underlineColorAndroid="transparent">
      {' '}
      Receiptz{' '}
    </Text>
  </View>
);

TextField.propTypes = {
  style: PropTypes.object,
};

TextField.defaultProps = {
  style: null,
};

export default TextField;
