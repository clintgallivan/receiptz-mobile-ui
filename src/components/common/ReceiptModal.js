import React, {useCallback, useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-native-modal';

import Logo from '../common/Logo';

import ListButton from '../common/ListButton';
import strings from 'localization';
import ErrorView from '../common/ErrorView';
import SearchBar from '../common/SearchBar';
import Ellipse from '../common/Ellipse';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginButton from '../common/LoginButton';

import getUser from 'selectors/UserSelectors';
import getData from 'selectors/DataSelectors';
import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import errorsSelector from 'selectors/ErrorSelectors';
import {isLoadingSelector} from 'selectors/StatusSelectors';
import {getUserReceipts, actionTypes} from 'actions/DataActions';
import {
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import ReceiptsController from 'controllers/ReceiptsController';
import dataReducer from 'reducers/DataReducer';

const ReceiptModal = props => {
  const _renderItem = ({item}) => {
    return (
      <View style={modalStyles.lineItems.item}>
        <Text>PENNE ARRABBIATA</Text>
        <Text>2.99</Text>
      </View>
    );
  };

  const item = useSelector(state => state.data.clickedReceipt);
  if (!item) return null;
  return (
    <Modal
      {...props}
      style={modalStyles.modalContainer}
      deviceHeight={props.deviceHeight}
      isVisible={props.isVisible}
      onBackdropPress={props.onBackDropPress}>
      <TouchableWithoutFeedback
        // onPress={console.log('hello')}
        style={modalStyles.touchable}>
        <ScrollView>
          <View style={modalStyles.modalView}>
            <LoginButton
              style={{backgroundColor: Colors.primary, borderRadius: 4}}
              title="Close Receipt"
              onPress={props.toggleModal}
            />
            <Text />
            <Text />
            {/* <View style={modalStyles.modalView}> */}
            <Text>{item.metadata.storeName}</Text>
            <Text>{item.metadata.address}</Text>

            <Text>Store # {item.metadata.phone}</Text>
            <Text />
            <Text>{item.metadata.storeHours}</Text>
            <Text />
            {/* <FlatList data={} renderItem={_renderItem}/> */}
            <View style={modalStyles.lineItems}>
              <Text>{item.lineItems.item}</Text>
              <Text>2.99</Text>
            </View>
            <View style={modalStyles.lineItems.item}>
              <Text>PENNE ARRABBIATA</Text>
              <Text>2.99</Text>
            </View>
            <Text />
            <View style={modalStyles.lineItems}>
              <Text>SUBTOTAL</Text>
              <Text>$5.98</Text>
            </View>
            <View style={modalStyles.lineItems}>
              <Text>STATE TAX</Text>
              <Text>$0.07</Text>
            </View>
            <View style={modalStyles.lineItems}>
              <Text>TOTAL</Text>
              <Text>$6.05</Text>
            </View>

            {/* </View> */}
          </View>
          {/* </TouchableWithoutFeedback> */}
          {/* </TouchableOpacity> */}
        </ScrollView>
      </TouchableWithoutFeedback>
      {/* </View> */}
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: 'center',
    // marginTop: 100,
    // alignItems: 'center',
    // marginTop: 100,
    // backgroundColor: 'black',
    // opacity: 0.5,
  },
  modalContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 20,
    // marginBottom: 200,
    marginHorizontal: 20,
    // backgroundColor: 'black',
  },
  modalView: {
    flex: 1,
    // margin:
    // marginTop: 20,
    // marginHorizontal: 30,
    // marginBottom: 100,
    marginVertical: 20,
    backgroundColor: Colors.inputBackground,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
  },

  lineItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  touchable: {
    // backgroundColor: 'black',
    // marginVertical: 50,
    // flex: 1,
    // borderRadius: 20,
    // flexGrow: 1,
    // flex: 1,
  },
});

export default ReceiptModal;
