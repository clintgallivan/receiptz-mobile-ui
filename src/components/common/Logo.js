import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    backgroundColor: "transparent",
    color: Colors.white,
    opacity: 1,
    fontSize: 46,
    textAlign: "center"
  },
});

const TextField = props => (
  <View style={styles.container}>
    <Text
      {...props}
      style={[styles.logo, props.style]}
      underlineColorAndroid="transparent"
    > RECEIPTZ </Text>
  </View>
);

TextField.propTypes = {
  style: PropTypes.object,
};

TextField.defaultProps = {
  style: null,
};

export default TextField;
