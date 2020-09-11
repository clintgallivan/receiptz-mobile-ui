import React, {useCallback, useEffect} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import profileImage from 'assets/im_profile/illustrations-tree-06.png';

import strings from 'localization';

import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import getUser from 'selectors/UserSelectors';
import styles from './Styles';

const User = () => {
  const user = useSelector(state => getUser(state));

  // console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={profileImage} marginVertical={30}/>
        <Text style={styles.headerText}>
          {user ? `${user.metadata.name.first} ${user.metadata.name.last}` : ''}
        </Text>
        <Text style={styles.subText}>SAVING RECEIPTZ SINCE 2017</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.totals}>
          <Text style={styles.headerText}>{user ? `${user.count}` : ''}</Text>
          <Text style={styles.subText}>Total Receiptz</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.totals}>
          <Text style={styles.headerText}>2</Text>
          <Text style={styles.subText}>Trees Planted</Text>
        </View>
      </View>
    </View>
  );
};

User.navigationOptions = {
  title: strings.profile,
  headerTitleStyle: {
    color: Colors.topTabText,
    fontFamily: 'AvenirNext-Bold',
  },
  headerStyle: HeaderStyles.appHeader,
};

export default User;
