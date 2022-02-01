import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import ListButton from '../common/ListButton';

import Colors from 'helpers/Colors';
import getUser from 'selectors/UserSelectors';

const AddCardViewFeature = () => {
  const item = useSelector(state => state.user.clickedCardInfo);
  const user = useSelector(state => getUser(state));

  let cardDataLength = user.cards.length;
  console.log({cardDataLength});

  let cardData = user
    ? user.cards.map(({bankName, lastFourDigits}, id) => {
        return {
          header: 'Bank',
          header2: 'Last 4 Digits',
          id,
          info: [bankName, lastFourDigits],
        };
      })
    : [{id: 0, info: ['', 0]}];

  const _renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            return (
              dispatch(clickedCardInfo(item)),
              props.navigation.navigate('SettingItemEdit')
            );
          }}>
          <View style={styles.listButtonContainer}>
            <ListButton
              headerPrimary={item.info[0]}
              headerSecondary={item.info[1]}
              headerPrimaryStyle={styles.headerPrimaryStyle}
              headerSecondaryStyle={styles.addCard}
              linkDescription={'Edit'}
              bookMarkIcon="edit"
              bookMarkIconColor={Colors.primaryText}
              bookMarkIconSize={19}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    );
  };

  if (item.id === cardDataLength) {
    if (cardDataLength === 0) {
      return (
        <View style={styles.noCardsContainer}>
          <Text style={styles.headerPrimaryStyle}>
            Please Add Cards to Receive Digital Receiptz
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.flatListContainer}>
          <FlatList renderItem={_renderItem} data={cardData} />
        </View>
      );
    }
  } else {
    return <View />;
  }
};

const styles = StyleSheet.create({
  flatListContainer: {
    // backgroundColor: 'black',
    flex: 1,
  },
  noCardsContainer: {
    // marginTop: 100,
    alignItems: 'center',
    // backgroundColor: 'black',
    paddingHorizontal: 31,
    flex: 0.5,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  line: {
    backgroundColor: Colors.gray,
    marginTop: 2,
    height: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    marginHorizontal: 31,
  },
  listButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'stretch',
    paddingHorizontal: 31,
  },
  headerPrimaryStyle: {
    color: '#606060',
    // opacity: 1,
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'AvenirNext-Regular',
  },
  addCard: {
    color: '#606060',
    fontSize: 11,
    fontFamily: 'AvenirNext-Regular',
  },
});

export default AddCardViewFeature;
