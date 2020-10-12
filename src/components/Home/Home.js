import React, {useCallback, useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-native-modal';

import {styles} from './styles';
import {modalStyles} from './styles';

import Logo from '../common/Logo';

import ListButton from '../common/ListButton';
import strings from 'localization';
import ErrorView from '../common/ErrorView';
import SearchBar from '../common/SearchBar';
import Ellipse from '../common/Ellipse';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginButton from '../common/LoginButton';
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
import {
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import ReceiptsController from 'controllers/ReceiptsController';

function Home(props) {
  const user = useSelector(state => getUser(state));
  const data = useSelector(state => state.data.data);

  const dispatch = useDispatch();
  const isLoading = useSelector(state =>
    isLoadingSelector([actionTypes.DATA], state),
  );
  const errors = useSelector(state =>
    errorsSelector([actionTypes.DATA], state),
  );

  const [term, setTerm] = useState('');

  // const scrollPosition = useRef(0);

  const windowHeight = Dimensions.get('window').height;

  const [isModalVisible, setModalVisible] = useState(false);

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
            dispatch(clickedReceipt(item));
            toggleModal();
          }}>
          <View style={styles.listButtonContainer}>
            {/* <Ellipse /> */}
            {/* <Text style={styles.ellipse}>Yo</Text> */}
            {/* <Text>Hello</Text> */}
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
    if (user) {
      const id = user._id;
      if (id) {
        dispatch(getUserReceipts(user._id));
      }
      console.log('data', {data, isLoading, errors});
    }
  }, [user]);

  // console.log('youyyoyyo');
  console.log(user);
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
}

Home.navigationOptions = {
  title: strings.home,
  headerTitleStyle: {
    color: Colors.primaryText,
    fontFamily: 'AvenirNext-Bold',
  },
  headerStyle: HeaderStyles.appHeader,
};

export default Home;
