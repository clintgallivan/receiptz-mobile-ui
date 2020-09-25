import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import strings from 'localization';
import SearchBar from '../common/SearchBar';
import Ellipse from '../common/Ellipse';
import ListButton from '../common/ListButton';
import ErrorView from '../common/ErrorView';

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

  const _renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.listButtonContainer}>
          <Ellipse />
          <ListButton
            headerPrimary={item.metadata.storeName}
            headerSecondary={item.metadata.date}
            bookMarkIcon={
              item.metadata.bookMarked === 'no' ? 'bookmark-o' : 'bookmark'
            }
            item={item}
          />
        </View>
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
      <SearchBar term={term} setTerm={setTerm} />
      <FlatList data={finalList} renderItem={_renderItem} />
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
