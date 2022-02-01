import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import AddCardViewFeature from '../common/AddCardViewFeature';

import strings from 'localization';
import Colors from '../../helpers/Colors';
import HeaderStyles from 'helpers/HeaderStyles';
import getUser from 'selectors/UserSelectors';
import Feather from 'react-native-vector-icons/Feather';
import {saveItemEdit, updateItemEdit} from 'actions/UserActions';
// import styles from 'helpers/TextStyles';

// import styles from 'helpers/TextStyles';

const SettingItemEdit = props => {
  const item = useSelector(state => state.user.clickedCardInfo);
  const dispatch = useDispatch();
  const user = useSelector(state => getUser(state));

  const [firstValue, setFirstValue] = useState(item.primaryInput);
  const [secondValue, setSecondValue] = useState(item.secondaryInput);

  // const changedFirstValue = useCallback(value => setFirstValue(value), []);
  const updateValueState = (fv, sv) => {
    dispatch(updateItemEdit(fv, sv));
  };
  let cardDataLength = user.cards.length;
  console.log({cardDataLength});

  // const firstPlaceHolderValue = item.id === cardDataLength ? 'Bank' : '';

  // const secondPlaceHolderValue =
  //   item.id === cardDataLength ? 'Last 4 Digits' : ['', ''];

  const addCardPlaceholder =
    item.id === cardDataLength ? ['Bank', 'Last 4 Digits'] : ['', ''];
  // console.log(firstPlaceHolderValue.value);
  // console.log(firstPlaceHolderValue);
  // if (item.primaryHeader === 'Bank') {
  if (item.id <= cardDataLength) {
    return (
      <View style={styles.container}>
        <Text style={styles.textInputHeader}>{item.primaryHeader}</Text>
        <TextInput
          placeholder={addCardPlaceholder[0]}
          value={firstValue}
          onChangeText={setFirstValue}
          onChange={updateValueState(firstValue, secondValue)}
          style={styles.accountTextInput}
          clearButtonMode="while-editing" //! This is how the flatlist should render
        />
        <View style={styles.line} />
        <Text style={styles.textInputHeader}>{item.secondaryHeader}</Text>
        <TextInput
          placeholder={addCardPlaceholder[1]}
          value={secondValue}
          onChangeText={setSecondValue}
          onChange={updateValueState(firstValue, secondValue)}
          style={styles.accountTextInput}
          clearButtonMode="while-editing"
        />
        <View style={styles.line} />
        <View style={styles.addCardContainer}>
          <AddCardViewFeature />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textInputHeader}>{item.primaryHeader}</Text>
        <TextInput
          value={secondValue}
          onChangeText={setSecondValue}
          onChange={updateValueState(firstValue, secondValue)}
          style={styles.accountTextInput}
          clearButtonMode="while-editing" //! This is how the flatlist should render
        />
        <View style={styles.line} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  addCardContainer: {
    marginTop: 40,
    // backgroundColor: 'black',
    justifyContent: 'flex-start',
    flex: 1,
  },
  container: {
    flex: 1,
    // marginHorizontal: 31,
  },
  accountTextInput: {
    // backgroundColor: 'blue',
    // marginHorizontal: 31,
    // marginTop: 20,
    color: '#606060',
    fontSize: 14,
    marginHorizontal: 31,
    // paddingVertical: 18,
    paddingBottom: 9,
    paddingTop: 18,
    // backgroundColor: 'yellow',
  },
  cardTextInput: {
    // backgroundColor: 'blue',
    // marginHorizontal: 31,
    // marginTop: 20,
    color: '#606060',
    fontSize: 14,
    marginHorizontal: 31,
    // paddingVertical: 18,
    paddingBottom: 9,
    // backgroundColor: 'black',
  },
  textInputHeader: {
    color: '#C4C4C4',
    fontSize: 11,
    fontFamily: 'AvenirNext-Regular',
    marginHorizontal: 31,
    // paddingVertical: 18,
    paddingTop: 9,
    marginBottom: -18,
  },
  line: {
    backgroundColor: Colors.gray,
    marginTop: 2,
    marginHorizontal: 31,
    height: 1,
    fontFamily: 'AvenirNext-Regular',
    // flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

const navStyles = StyleSheet.create({
  headerRight: {
    color: '#41969F',
    fontSize: 12,
  },
  headerLeft: {
    color: Colors.inputTextColor,
    fontSize: 12,
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
    marginLeft: 20,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  headerRightContainer: {
    // flexDirection: 'row',
    // backgroundColor: 'blue',
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

const HeaderRight = props => {
  const updateItem = useSelector(state => state.user.updateItemEdit);

  const {navigation} = props;
  const item = useSelector(state => state.data.clickedAccountInfo);
  const user = useSelector(state => state.user.user);
  const originalItem = useSelector(state => state.user.clickedCardInfoMatch);
  const finalItem = useSelector(state => state.user.updatedUser);

  // const someSelectorFn = useSelector(somSelectorFunction);
  const dispatch = useDispatch();
  const onPress = () => {
    //* if state.data.clickeAccountInfo (item.info: {}) === state.user.user, then return state.data.updateItem
    dispatch(saveItemEdit());
    navigation.pop();
    console.log('000000000');
    console.log({updateItem});
    console.log({userCards: user.cards});
    console.log({originalItem});
    console.log({finalItem});

    // dispatch(saveItemEdit(updateItem));
    // console.log('&&&&&');
    // console.log(finalItem);
    // console.log(updateItem);
    // console.log(user.cards);
    // navigation.pop();
  };
  return (
    <TouchableOpacity style={navStyles.headerRightContainer} onPress={onPress}>
      <Text style={navStyles.headerRight}>Save</Text>
    </TouchableOpacity>
  );
};

SettingItemEdit.navigationOptions = ({navigation, dispatch}) => {
  return {
    title: strings.settings,
    headerTitleStyle: {
      color: Colors.primaryText,
      fontFamily: 'AvenirNext-Bold',
    },
    headerRight: () => <HeaderRight navigation={navigation} />,
    // headerRight: () => (
    //   <TouchableOpacity
    //     style={navStyles.headerRightContainer}
    //     onPress={() => {
    //       console.log(navigation.getScreenProps());
    //     }}>
    //     <Text style={navStyles.headerRight}>Save</Text>
    //   </TouchableOpacity>
    // ),
    headerLeft: () => (
      <TouchableOpacity
        style={navStyles.headerLeftContainer}
        onPress={() => navigation.pop()}>
        <Feather name="arrow-left" size={20} color={Colors.inputTextColor} />
        <Text style={navStyles.headerLeft}>Back</Text>
      </TouchableOpacity>
    ),
    // headerRight: () => (
    //   <View>
    //     {/* <AntDesign name="arrowleft" size={30} /> */}
    //     <Text>Save</Text>
    //   </View>
    // ),
    // headerLeft: <Text>Back</Text>,
  };
};

// SettingItemEdit.navigationOptions = {
//   title: strings.settings,
//   headerRight: <Text>Save</Text>,
//   headerLeft: <Text>Go Backk</Text>,
//   // headerRight: 'save',

//   // headerBackTitleStyle: {
//   //   color: 'red',
//   // },
//   headerTitleStyle: {
//     color: Colors.primaryText,
//     fontFamily: 'AvenirNext-Bold',
//   },
//   headerStyle: HeaderStyles.appHeader,
// };

export default SettingItemEdit;
