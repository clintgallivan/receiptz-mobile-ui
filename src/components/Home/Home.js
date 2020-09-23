import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';

import Logo from '../common/Logo';

import ListButton from '../common/ListButton';
import strings from 'localization';
import ErrorView from '../common/ErrorView';
import SearchBar from '../common/SearchBar';
import Ellipse from '../common/Ellipse';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import getUser from 'selectors/UserSelectors';
import getData from 'selectors/DataSelectors';
import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import errorsSelector from 'selectors/ErrorSelectors';
import {isLoadingSelector} from 'selectors/StatusSelectors';
import {getUserReceipts, actionTypes} from 'actions/DataActions';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import ReceiptsController from 'controllers/ReceiptsController';

function Home(props) {
  const user = useSelector(state => getUser(state));
  const data = useSelector(state => state.data.data);
  const clickedReceipt = useSelector(state => state.data.clickedReceipt);
  const clickedBookmark = useSelector(state => state.data.clickedBookmark);

  const dispatch = useDispatch();
  const isLoading = useSelector(state =>
    isLoadingSelector([actionTypes.DATA], state),
  );
  const errors = useSelector(state =>
    errorsSelector([actionTypes.DATA], state),
  );

  const [term, setTerm] = useState('');

  const [bookMarkFill, setBookMarkFill] = useState('bookmark-o');
  // console.log(bookMarkFill)
  const bookMarked = () => {
    bookMarkFill === 'bookmark'
      ? setBookMarkFill('bookmark-o') & console.log('UnSaved')
      : setBookMarkFill('bookmark') & console.log('Saved');
  };

  // data.filter(item => item.metadata)
  // console.log('-----');
  // data.forEach(item => console.log(item.metadata.storeName));
  // const dataValue = () => {}
  //*  const dataValue = data
  //*   .filter(item => item.metadata.bookMarked == 'no')
  //*  .map(({metadata}) => ({ storeName: metadata.storeName}));
  //*   console.log('-------')
  //*  console.log(dataValue);
  // const dataValue = data
  //   .filter(item => item.metadata.bookMarked == 'no')
  //   .map(({metadata}) => ({metadata}));
  // console.log('-------');
  // data.forEach(item => console.log(item.metadata.bookMarked));
  // console.log(dataValue);

  // bookMarkIcon = () => {
  //   data.forEach(item => console.log(item.metadata.storeName));
  // };

  const _renderItem = ({item}) => {
    if (!item) {
      return null;
    }
    return (
      <View>
        <View style={styles.listButtonContainer}>
          <Ellipse />
          {/* <Text style={styles.ellipse}>Yo</Text> */}
          {/* <Text>Hello</Text> */}
          <ListButton
            headerPrimary={item.metadata.storeName}
            headerSecondary={item.metadata.date}
            bookMarkIcon={
              item.metadata.bookMarked === 'no' ? 'bookmark-o' : 'bookmark'
            }
            // bookMarked={bookMarked}
            // bookMarkFill={bookMarkFill}
            item={item}
            // linkDescription={'View'}
          />
        </View>
        <View style={styles.line} />
      </View>
    );
  };
  useEffect(() => {
    dispatch(getUserReceipts(user._id));
    console.log('+++++++');
    console.log('data', {data, isLoading, errors});
  }, []);

  useEffect(() => {
    console.log('clickeReceipt');
    console.log(clickedReceipt);
  }, [clickedReceipt]);

  useEffect(() => {
    console.log('clickedBookmark');
    console.log(clickedBookmark);
  }, [clickedBookmark]);

  let finalList = [];
  if (term !== '' && data.length > 0) {
    let searchedWords = term.toLowerCase().split(' ');
    finalList = data.filter(receipt => {
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
    finalList = data;
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
      <SearchBar
        term={term}
        setTerm={setTerm}
        // onChangeText={}`
      />
      <FlatList data={finalList} renderItem={_renderItem} />
    </View>
  );
}

Home.navigationOptions = {
  title: strings.home,
  headerTitleStyle: {
    color: Colors.topTabText,
    fontFamily: 'AvenirNext-Bold',
  },
  headerStyle: HeaderStyles.appHeader,
};

export default Home;
