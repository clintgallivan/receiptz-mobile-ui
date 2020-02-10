import React, { useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';

import Logo from '../common/Logo';

import TextStyles from 'helpers/TextStyles';
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
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonList}>
          <View style={styles.receiptInfo}>
            <Text style={styles.nameOfStore}>
              {item.metadata.storeName}
            </Text>
            <Text style={styles.dateOfPurchase}>
              {item.metadata.date}
            </Text>
          </View>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
        <View style={styles.line}/>
      </View>
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
  title: "RECEIPTZ",
  headerTitleStyle: {
    color: Colors.white
  },
  headerStyle: HeaderStyles.appHeader
};

export default Home;
