import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

import strings from 'localization';
import Colors from '../../helpers/Colors';
import HeaderStyles from 'helpers/HeaderStyles';
import getUser from 'selectors/UserSelectors';

// import styles from 'helpers/TextStyles';

const SettingItemEdit = props => {
  const item = useSelector(state => state.data.clickedAccountInfo);
  const user = useSelector(state => getUser(state));
  const [editItemValue, setEditItemValue] = useState('');

  const eachItem = item.info.map(({item}) => {
    return {item: item};
  });

  const cardMapName = user.cards.map(({bankName, lastFourDigits}) => {
    return {
      bankName: bankName,
      lastFourDigits: lastFourDigits,
    };
  });

  console.log(user);
  console.log(eachItem);
  console.log('[[][][][][]]');
  console.log(item.info[0]);
  console.log(item.info[1]);
  console.log(cardMapName);

  const _renderItem = () => {
    // if (item.info[1] === user.metadata.phoneNumber) {
    //   return (
    //     <View>
    //       <Text>Success</Text>
    //     </View>
    //   );
    // } else {
    //   return (
    //     <View>
    //       <Text>Fail</Text>
    //     </View>
    //   );
    // }
    // return item.info[1] === user.metadata.phoneNumber ? (
    //   <View>
    //     <Text>success</Text>
    //   </View>
    // ) : (
    //   <View>
    //     <Text>Fail</Text>
    //   </View>
    // );

    if (item.info[1] === user.metadata.phoneNumber) {
      return (
        <View>
          <Text>phone number</Text>
        </View>
      );
    } else if (
      item.info[1] ===
      user.metadata.name.first + ' ' + user.metadata.name.last
    ) {
      return (
        <View>
          <Text>Name</Text>
        </View>
      );
    } else if (item.info[1] == user.metadata.email) {
      return (
        <View>
          <Text>Email</Text>
        </View>
      );
    } else if (item.info[1] == user.metadata.password) {
      return (
        <View>
          <Text>Password</Text>
        </View>
      );
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
  textInput: {
    // backgroundColor: 'blue',
    // marginHorizontal: 31,
    // marginTop: 20,
    color: Colors.inputTextColor,
    fontSize: 14,
    marginHorizontal: 31,
    paddingVertical: 18,
  },
  line: {
    backgroundColor: Colors.gray,
    marginTop: 2,
    marginHorizontal: 31,
    height: 1,
    // flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

SettingItemEdit.navigationOptions = {
  title: strings.settings,
  headerBackTitle: strings.back,
  headerBackTitleStyle: {
    color: 'red',
  },
  headerTitleStyle: {
    color: Colors.primaryText,
    fontFamily: 'AvenirNext-Bold',
  },
  headerStyle: HeaderStyles.appHeader,
};

export default SettingItemEdit;
