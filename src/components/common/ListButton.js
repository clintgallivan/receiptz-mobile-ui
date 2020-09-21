import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {clickedReceipt} from '../../actions/DataActions';
import {clickedBookmark} from '../../actions/DataActions';

const ListButton = props => {
  const dispatch = useDispatch();

  return (
    <View style={styles.row}>
      <TouchableOpacity
        {...props}
        style={[styles.buttonList, props.style]}
        onPress={() => {
          dispatch(clickedReceipt(props.item));
        }}>
        <View style={styles.dataView}>
          <Text style={styles.headerPrimary}>{props.headerPrimary}</Text>
          <Text style={styles.headerSecondary}>{props.headerSecondary}</Text>
        </View>
        {/* <Text style={styles.linkDescription}>
        {props.linkDescription} */}
        <FontAwesome
          name={props.bookMarkFill}
          size={25}
          color="#C4C4C4"
          onPress={() => {
            dispatch(clickedBookmark(props.item));
          }}
        />
        {/* </Text> */}
      </TouchableOpacity>
      {/* <View style={styles.line}/>  */}
    </View>
  );
};

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

const styles = StyleSheet.create({
  row: {
    flex: 6,
    // backgroundColor: 'transparent',
    // alignSelf: 'stretch',
    // flexDirection: 'column',
    // justifyContent: 'space-evenly',
    // marginHorizontal: 31,
    // height: 67,
  },
  buttonList: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dataView: {
    alignSelf: 'stretch',
    // justifyContent: 'space-between',
    marginVertical: 8,
  },
  headerPrimary: {
    color: '#233064',
    // opacity: 1,
    fontSize: 17,
    textAlign: 'left',
    fontFamily: 'AvenirNext-Bold',
  },
  headerSecondary: {
    color: '#C4C4C4',
    opacity: 1,
    fontSize: 11,
    textAlign: 'left',
    marginTop: 7,
    fontFamily: 'AvenirNext-Regular',
  },
  linkDescription: {
    color: Colors.primary,
    opacity: 1,
    fontSize: 12,
    textAlignVertical: 'bottom',
  },
  line: {
    backgroundColor: Colors.gray,
    marginTop: 2,
    height: 1,
    // flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

export default ListButton;
