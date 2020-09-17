import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

import strings from 'localization';
import SearchBar from '../common/SearchBar';
import Ellipse from '../common/Ellipse';
import ListButton from '../common/ListButton';

import getUser from 'selectors/UserSelectors';
import getData from 'selectors/DataSelectors';
import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import {getUserReceipts} from 'actions/DataActions';

const Saved = props => {
  const user = useSelector(state => getUser(state));
  const data = useSelector(state => getData(state));

  const [term, setTerm] = useState('');

  const _renderItem = ({item}) => {

    
    return (
      <View>
        <View style={styles.listButtonContainer}>
          <Ellipse />
          <ListButton
            headerPrimary={item.metadata.storeName}
            headerSecondary={item.metadata.date}
          />
        </View>
        <View style={styles.line} />
      </View>
    );
  };


  let finalList = []
  if (term !== '' && data.length > 0) {
    let searchedWords = term.toLowerCase().split(' ')
      finalList = data.filter(receipt => {
          let isSearched = true
          for (let i = 0; i < searchedWords.length; i++) {
              if (
                  !receipt.metadata.storeName
                      .toLowerCase()
                      .includes(searchedWords[i]) 
              ) {
                  isSearched = false
                  break
              }
          }
          return isSearched
      })
  } else {
      finalList = data
  }

  return (
    <View style={styles.container}>
      <SearchBar 
        term={term}
        setTerm={setTerm}
      />
      <FlatList data={finalList} renderItem={_renderItem} />
    </View>
  );
};

Saved.navigationOptions = {
  title: strings.saved,
  headerTitleStyle: {
    color: Colors.topTabText,
    fontFamily: 'AvenirNext-Bold',
  },
  headerStyle: HeaderStyles.appHeader,
};

export default Saved;
