import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import TextStyles from 'helpers/TextStyles';
import Colors from 'helpers/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {clickedReceipt} from '../../actions/DataActions';
import {clickedBookmark} from '../../actions/DataActions';

import Ellipse from '../common/Ellipse';

const ListButton = props => {
  const dispatch = useDispatch();

  return (
    <View style={styles.row}>
      {/* <TouchableOpacity
        {...props}
        style={[styles.buttonList, props.style]}
        onPress={props.clicked}
        // onPress={() => {
        //   dispatch(clickedReceipt(props.item)); //* COMMENT THIS BACK IN AFTER MODAL TESTING COMPLETE
        // }}
      > */}
      {/* <View style={styles.listButtonContainer}> */}
      {props.showEllipse && <Ellipse />}
      {/* </View> */}
      <View style={styles.dataView}>
        <Text style={props.headerPrimaryStyle}>{props.headerPrimary}</Text>
        <Text style={props.headerSecondaryStyle}>{props.headerSecondary}</Text>
      </View>

      {/* <Text style={styles.linkDescription}>
        {props.linkDescription} */}
      <FontAwesome
        name={props.bookMarkIcon}
        size={props.bookMarkIconSize}
        color={props.bookMarkIconColor}
        onPress={() => {
          dispatch(clickedBookmark(props.item));
        }}
      />
      {/* </Text> */}
      {/* </TouchableOpacity> */}
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
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    flex: 6,
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
  listButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'stretch',
    // paddingHorizontal: 31,
  },
});

export default ListButton;
