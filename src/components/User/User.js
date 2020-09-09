import React, { useCallback, useEffect } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';

import profileImage from 'assets/im_profile/illustrations-tree-06.png'; 

import strings from 'localization';

import HeaderStyles from 'helpers/HeaderStyles';
import Colors from 'helpers/Colors';
import getUser from 'selectors/UserSelectors';



const User = () => {
  
  const user = useSelector(state => getUser(state));
  console.log('hhhhhiiiiiiii')
  console.log(user);
  return (
  <View>
    <Image 
    source={profileImage}
    /> 
    <Text>{user ? `${user.metadata.name.first} ${user.metadata.name.last}` : ""}</Text>
    <Text>{`${user.count}`}</Text>
  </View>
  )
};

User.navigationOptions = {
  title: strings.profile,
  headerTitleStyle: {
    color: Colors.topTabText,
    fontFamily: 'AvenirNext-Bold'
  },
  headerStyle: HeaderStyles.appHeader
};

export default User;