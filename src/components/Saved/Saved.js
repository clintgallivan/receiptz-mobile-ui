import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import strings from 'localization';
import SearchBar from '../common/SearchBar';
import Ellipse from '../common/Ellipse';
import ListButton from '../common/ListButton';
import ErrorView from '../common/ErrorView';
import ReceiptModal from '../common/ReceiptModal';

import getUser from 'selectors/UserSelectors';
import getData from 'selectors/DataSelectors';
import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import errorsSelector from 'selectors/ErrorSelectors';
import {isLoadingSelector} from 'selectors/StatusSelectors';
import {
  getUserReceipts,
  actionTypes,
  clickedReceipt,
  clickedBookmark,
} from 'actions/DataActions';

const Saved = props => {
  const user = useSelector(state => getUser(state));
  const data = useSelector(state => getData(state));

  const isLoading = useSelector(state =>
    isLoadingSelector([actionTypes.DATA], state),
  );
  const errors = useSelector(state =>
    errorsSelector([actionTypes.DATA], state),
  );

  const [term, setTerm] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);

  const windowHeight = Dimensions.get('window').height;

  const dispatch = useDispatch();

  const toggleModal = () => {
    isModalVisible === true ? setModalVisible(false) : setModalVisible(true);
  };

  const _renderItem = ({item}) => {
    if (!item) {
      return null;
    }
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            // console.log(props.state);
            dispatch(clickedReceipt(item));
            // console.log('heyheyhey');
            // console.log(item);
            toggleModal();
          }}>
          <View style={styles.listButtonContainer}>
            {/* <Ellipse /> */}
            <ListButton
              showEllipse={true}
              clicked={toggleModal}
              headerPrimary={item.metadata.storeName}
              headerSecondary={item.metadata.date}
              headerPrimaryStyle={styles.headerPrimaryStyle}
              headerSecondaryStyle={styles.headerSecondaryStyle}
              bookMarkIcon={
                item.metadata.bookMarked === 'no' ? 'bookmark-o' : 'bookmark'
              }
              bookMarkIconColor="#C4C4C4"
              bookMarkIconSize={25}
              item={item}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    );
  };

  useEffect(() => {
    console.log(clickedReceipt);
  }, [clickedReceipt]);

  let bookMarkedList = [];
  bookMarkedList = data.filter(receipt => receipt.metadata.bookMarked == 'yes');

  let finalList = [];
  if (term !== '' && bookMarkedList.length > 0) {
    let searchedWords = term.toLowerCase().split(' ');
    finalList = bookMarkedList.filter(receipt => {
      let isSearched = true;
      for (let i = 0; i < searchedWords.length; i++) {
        if (
          !receipt.metadata.storeName.toLowerCase().includes(searchedWords[i])
        ) {
          isSearched = false;
          break;
        }
      }
      return isSearched;
    });
  } else {
    finalList = bookMarkedList;
  }

  if (!finalList) return null;
  finalList = finalList.filter(item => {
    return item != null;
  });
  return errors.length > 0 ? (
    <ErrorView errors={errors} />
  ) : isLoading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <ReceiptModal
        deviceHeight={windowHeight}
        isVisible={isModalVisible}
        onBackDropPress={() => setModalVisible(false)}
        toggleModal={toggleModal}
      />
      <SearchBar term={term} setTerm={setTerm} />
      <FlatList
        data={finalList}
        renderItem={_renderItem}
        keyExtractor={item => item.metadata.id}
      />
    </View>
  );
};

Saved.navigationOptions = {
  title: strings.saved,
  headerTitleStyle: {
    color: Colors.primaryText,
    fontFamily: 'AvenirNext-Bold',
  },
  headerStyle: HeaderStyles.appHeader,
};

export default Saved;
