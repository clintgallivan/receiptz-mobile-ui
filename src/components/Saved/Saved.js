import React, {useCallback, useEffect} from 'react';
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
  console.log('hiiiii');
  console.log(data);

  const _renderItem = ({item}) => {
    console.log('hiiiii')
    console.log(item);
    
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

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList data={data} renderItem={_renderItem} />
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
