import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

import strings from 'localization';
import Colors from '../../helpers/Colors';
import HeaderStyles from 'helpers/HeaderStyles';
import getUser from 'selectors/UserSelectors';
import Feather from 'react-native-vector-icons/Feather';

// import styles from 'helpers/TextStyles';

const SettingItemEdit = props => {
  const item = useSelector(state => state.data.clickedAccountInfo);
  const user = useSelector(state => getUser(state));

  const [firstValue, setFirstValue] = useState(item.info[1]);
  const [secondValue, setSecondValue] = useState(item.info[0]);

  const cardMapName = user.cards.map(({bankName, lastFourDigits}) => {
    return {
      bankName,
      lastFourDigits,
    };
  });
  // console.log(item.info);
  // console.log('[][][][][][]');
  // console.log(item);
  // console.log(user);
  // console.log(eachItem);
  // console.log('[[][][][][]]');
  // console.log(item.info[0]);
  // console.log(item.info[1]);
  // console.log(cardMapName);
  // console.log(cardMapName);
  // console.log(cardMapName[0].bankName, cardMapName[0].lastFourDigits);

  const addCard = useSelector(state => state.data.clickedAddCards);

  const _renderCardItemView = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textInputHeader}>Bank</Text>
        <TextInput
          value={secondValue}
          onChangeText={setSecondValue}
          style={styles.accountTextInput}
          clearButtonMode="while-editing" //! This is how the flatlist should render
        />
        <View style={styles.line} />
        <Text style={styles.textInputHeader}>Last 4 Digits</Text>
        <TextInput
          value={firstValue}
          onChangeText={setFirstValue}
          // value={editItemValue}
          style={styles.accountTextInput}
          clearButtonMode="while-editing"
        />
        <View style={styles.line} />
      </View>
    );
  };

  const _renderAccountItemView = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textInputHeader}>{item.info[0]}</Text>
        <TextInput
          // placeholder={item.info[0]}
          value={firstValue}
          onChangeText={newText => setFirstValue(newText)}
          style={styles.accountTextInput}
          clearButtonMode="while-editing" //! This is how the flatlist should render
        />
        <View style={styles.line} />
      </View>
    );
  };

  const _renderItem = () => {
    console.log(addCard);
    if (addCard === true) {
      return (
        <View>
          <Text>ADD CARD</Text>
        </View>
      );
    }
    if (item.info[1] === user.metadata.phoneNumber) {
      return _renderAccountItemView();
    } else if (
      item.info[1] ===
      user.metadata.name.first + ' ' + user.metadata.name.last
    ) {
      return _renderAccountItemView();
    } else if (item.info[1] == user.metadata.email) {
      return _renderAccountItemView();
    } else if (item.info[1] == user.metadata.password) {
      return (
        <View>
          <Text>Password</Text>
        </View>
      );
    } else {
      return _renderCardItemView();
    }
  };

  return _renderItem();

  // <FlatList
  //   data={item}
  //   renderItem={_renderItem}
  //   keyExtractor={item => item.metadata.id}
  // />

  // <View style={styles.container}>
  //   <TextInput
  //     placeholder={item.info[0]}
  //     style={styles.textInput}
  //     clearButtonMode="while-editing" //! This is how the flatlist should render
  //   />
  //   <View style={styles.line} />
  //   <TextInput
  //     placeholder={JSON.stringify(item.info[1])}
  //     value={editItemValue}
  //     style={styles.textInput}
  //     clearButtonMode="while-editing"
  //   />
  //   <View style={styles.line} />
  // </View>;
};

const styles = StyleSheet.create({
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

SettingItemEdit.navigationOptions = ({navigation}) => {
  return {
    title: strings.settings,
    headerRight: () => (
      <TouchableOpacity
        style={navStyles.headerRightContainer}
        onPress={() => navigation.pop()}>
        <Text style={navStyles.headerRight}>Save</Text>
      </TouchableOpacity>
    ),
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
