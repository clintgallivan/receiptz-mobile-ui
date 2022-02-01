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
  const item = useSelector(state => state.data.clickedReceipt);
  console.log('MIOMEYOMIO');
  console.log();

  const _renderItem = ({item}) => {
    return (
      <View style={modalStyles.lineItems}>
        <Text style={textStyles.lineItem}>{item.item}</Text>
        <Text style={textStyles.lineItem}>{item.costPerItem}</Text>
      </View>
    );
  };

  if (!item) return null;

  return (
    <Modal
      {...props}
      style={modalStyles.modalContainer}
      deviceHeight={props.deviceHeight}
      isVisible={props.isVisible}
      onBackdropPress={props.onBackDropPress}>
      <TouchableWithoutFeedback style={modalStyles.touchable}>
        <ScrollView>
          <View style={modalStyles.modalView}>
            <LoginButton
              style={{backgroundColor: Colors.primary, borderRadius: 4}}
              title="Close Receipt"
              onPress={props.toggleModal}
            />
            <Text />
            <Text />
            <Text style={textStyles.header}>{item.metadata.storeName}</Text>
            <Text>{item.metadata.address}</Text>
            <Text style={textStyles.subHeader}>
              Store # {item.metadata.phone}
            </Text>
            <Text />
            <Text style={textStyles.subHeader}>{item.metadata.storeHours}</Text>
            <Text />
            <FlatList
              style={{alignSelf: 'stretch'}}
              data={item.lineItems}
              renderItem={_renderItem}
            />
            <Text />
            <View style={modalStyles.lineItems}>
              <Text style={textStyles.lineItem}>SUBTOTAL</Text>
              <Text style={textStyles.lineItem}>${item.metadata.subTotal}</Text>
            </View>
            <View style={modalStyles.lineItems}>
              <Text style={textStyles.lineItem}>STATE TAX</Text>
              <Text style={textStyles.lineItem}>${item.metadata.tax}</Text>
            </View>
            <View style={modalStyles.lineItems}>
              <Text style={textStyles.lineItem}>TOTAL</Text>
              <Text style={textStyles.lineItem}>${item.metadata.total}</Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      {/* </View> */}
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 20,

    marginHorizontal: 20,
  },
  modalView: {
    flex: 1,
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
    shadowOpacity: 1,
    shadowRadius: 5,
  },

  lineItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
});

const textStyles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontFamily: 'AvenirNext-Bold',
    color: Colors.primaryText,
  },
  subHeader: {
    fontSize: 11,
    fontFamily: 'AvenirNext-Regular',
    color: Colors.inputTextColor,
  },
  lineItem: {
    fontSize: 14,
    fontFamily: 'AvenirNext-Regular',
    color: 'black',
  },
});

export default ReceiptModal;
