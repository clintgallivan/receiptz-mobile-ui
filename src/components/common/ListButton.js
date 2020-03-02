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

const styles = StyleSheet.create({
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
  dataView: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  headerPrimary: {
    color: Colors.black,
    opacity: 1,
    fontSize: 16,
    textAlign: "left"
  },
  headerSecondary: {
    color: Colors.darkGray,
    opacity: 1,
    fontSize: 12,
    textAlign: "left",
    marginTop: 4
  },
  linkDescription: {
    color: Colors.primary,
    opacity: 1,
    fontSize: 12,
    textAlignVertical: "bottom",
  },
  line: {
    backgroundColor: Colors.gray,
    marginTop: 2,
    height: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  }

});

const ListButton = props => (
  <View style={styles.row}>
    <TouchableOpacity
      {...props}
      style={[styles.buttonList, props.style]}
    >
      <View style={styles.dataView}>
        <Text style={styles.headerPrimary}>
          {props.headerPrimary}
        </Text>
        <Text style={styles.headerSecondary}>
          {props.headerSecondary}
        </Text>
      </View>
      <Text style={styles.linkDescription}>
        {props.linkDescription}
      </Text>
    </TouchableOpacity>
    <View style={styles.line}/>
  </View>
);

ListButton.propTypes = {
  style: PropTypes.object,
  headerPrimary: PropTypes.string,
  headerSecondary: PropTypes.string,
  linkDescription: PropTypes.string,
};

ListButton.defaultProps = {
  style: null,
  headerPrimary: '',
  headerSecondary: '',
  linkDescription: '',
};

export default ListButton;
