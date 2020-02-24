import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';

import Logo from '../common/Logo';

import ListButton from '../common/ListButton';
import strings from 'localization';
import getUser from 'selectors/UserSelectors';
import ErrorView from '../common/ErrorView';

import getData from 'selectors/DataSelectors';
import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import errorsSelector from 'selectors/ErrorSelectors';
import { isLoadingSelector } from 'selectors/StatusSelectors';
import {getUserReceipts, actionTypes} from 'actions/DataActions'
import { FlatList } from 'react-native-gesture-handler';


function Home(props) {
  const user = useSelector(state => getUser(state));
  const data = useSelector(state => getData(state));

  const dispatch = useDispatch();
  const isLoading = useSelector(state => isLoadingSelector([actionTypes.DATA], state));
  const errors = useSelector(state => errorsSelector([actionTypes.DATA], state));
  const _renderItem = ({item}) => {
    return (
        <ListButton
          headerPrimary={item.metadata.storeName}
          headerSecondary={item.metadata.date}
          linkDescription={'View'}
        />
    )
  }
  useEffect(() => {
    dispatch(getUserReceipts(user._id))
    console.log('data', {data, isLoading, errors})
  }, []);

  return errors.length > 0 ? (<ErrorView errors={errors}/>): isLoading ? (
    <View><Text>Loading...</Text></View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={_renderItem}
      />
    </View>
  );
}

Home.navigationOptions = {
  title: strings.logo,
  headerTitleStyle: {
    color: Colors.white
  },
  headerStyle: HeaderStyles.appHeader
};

export default Home;
