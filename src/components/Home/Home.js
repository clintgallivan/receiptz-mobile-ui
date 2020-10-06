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

  const scrollPosition = useRef(0);

  const windowHeight = Dimensions.get('window').height;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    isModalVisible === true ? setModalVisible(false) : setModalVisible(true);
  };

  const handleScroll = e => {
    console.log(e.nativeEvent.contentOffset.y);
    scrollPosition.current = e.nativeEvent.contentOffset.y;
  };

  const handleScrollTo = p => {
    if (scrollPosition.current) {
      scrollPosition.current.scrollTo(p);
    }
  };

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
            clicked={toggleModal}
            headerPrimary={item.metadata.storeName}
            headerSecondary={item.metadata.date}
            bookMarkIcon={
              item.metadata.bookMarked === 'no' ? 'bookmark-o' : 'bookmark'
            }
            item={item}
            // linkDescription={'View'}
          />
        </View>
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

  console.log('youyyoyyo');
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
      {/* <View */}
      {/* style={{
          marginTop: 5,
          // height: '100%',
          // width: '100%',
          position: 'relative',
        }}> */}
      <Modal
        // animationType="slide"

        // transparent={true}
        style={modalStyles.modalContainer}
        deviceHeight={windowHeight}
        // propagateSwipe={true}
        isVisible={isModalVisible}
        // swipeThreshold={100}
        // onSwipeComplete={() => {
        //   setModalVisible(false);
        // }}
        // swipeDirection={['down']}
        // scrollOffsetMax={10}
        // scrollTo={handleScrollTo}
        // scrollOffset={1}
        onBackdropPress={() => setModalVisible(false)}>
        {/* <View flex={1}> */}
        <TouchableWithoutFeedback
          onPress={console.log('hello')}
          style={modalStyles.touchable}>
          <ScrollView onScroll={handleScroll}>
            {/* <TouchableOpacity> */}
            {/* <TouchableWithoutFeedback style={modalStyles.modalView}> */}

            <View
              // onStartShouldSetResponder={() => true}
              style={modalStyles.modalView}>
              {/* <Button title="Close" /> */}
              <LoginButton
                style={{backgroundColor: Colors.primary, borderRadius: 4}}
                title="Close Receipt"
                onPress={toggleModal}
              />
              <Text />
              <Text />
              {/* <View style={modalStyles.modalView}> */}
              <Text>Trader Joes</Text>
              <Text>5473 East 82nd Street</Text>
              <Text>Indianapolis IN 46250</Text>
              <Text>Store # 671 - (317) 595-8950</Text>
              <Text />
              <Text>OPEN 8:00AM TO 9:00PM DAILY</Text>
              <Text />
              <View style={modalStyles.lineItems}>
                <Text>RICE BASMATI FROM INDIA</Text>
                <Text>2.99</Text>
              </View>
              <View style={modalStyles.lineItems}>
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
              {/* --------------------------------------------------------- */}
              <Text>Trader Joes</Text>
              <Text>5473 East 82nd Street</Text>
              <Text>Indianapolis IN 46250</Text>
              <Text>Store # 671 - (317) 595-8950</Text>
              <Text />
              <Text>OPEN 8:00AM TO 9:00PM DAILY</Text>
              <Text />
              <View style={modalStyles.lineItems}>
                <Text>RICE BASMATI FROM INDIA</Text>
                <Text>2.99</Text>
              </View>
              <View style={modalStyles.lineItems}>
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
              {/* <Text>Trader Joes</Text>
              <Text>5473 East 82nd Street</Text>
              <Text>Indianapolis IN 46250</Text>
              <Text>Store # 671 - (317) 595-8950</Text>
              <Text />
              <Text>OPEN 8:00AM TO 9:00PM DAILY</Text>
              <Text />
              <View style={modalStyles.lineItems}>
                <Text>RICE BASMATI FROM INDIA</Text>
                <Text>2.99</Text>
              </View>
              <View style={modalStyles.lineItems}>
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
              <Text>Trader Joes</Text>
              <Text>5473 East 82nd Street</Text>
              <Text>Indianapolis IN 46250</Text>
              <Text>Store # 671 - (317) 595-8950</Text>
              <Text />
              <Text>OPEN 8:00AM TO 9:00PM DAILY</Text>
              <Text />
              <View style={modalStyles.lineItems}>
                <Text>RICE BASMATI FROM INDIA</Text>
                <Text>2.99</Text>
              </View>
              <View style={modalStyles.lineItems}>
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
              </View> */}
              {/* --------------------------------------------------------- */}
              {/* </View> */}
            </View>
            {/* </TouchableWithoutFeedback> */}
            {/* </TouchableOpacity> */}
          </ScrollView>
        </TouchableWithoutFeedback>
        {/* </View> */}
      </Modal>
      {/* </View> */}
      <SearchBar term={term} setTerm={setTerm} />
      <FlatList data={finalList} renderItem={_renderItem} />
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
