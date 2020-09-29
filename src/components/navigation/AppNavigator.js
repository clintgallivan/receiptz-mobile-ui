import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from '../Profile';
import Home from '../Home';
import User from '../User';
import Saved from '../Saved';

import receiptIcon from 'assets/ic_receipt/Receipt.png';
import profileIcon from 'assets/ic_profile/Profile.png';
import savedIcon from 'assets/ic_saved/Saved.png';
import settingsIcon from 'assets/ic_settings/Settings.png';

import Colors from 'helpers/Colors';
import {create} from 'react-test-renderer';

const iconForTab = ({state}) => {
  switch (state.routeName) {
    case 'Home':
      return receiptIcon;
    case 'User':
      return profileIcon;
    case 'Saved':
      return savedIcon;
    case 'Profile':
      return settingsIcon;
    default:
      return null;
  }
};

const TabIcon = (
  {icon, tintColor}, // eslint-disable-line
) => <Image source={icon} style={{tintColor}} />;

const ProfileStack = createStackNavigator({Profile});
const HomeStack = createStackNavigator({Home});
const UserStack = createStackNavigator({User});
const SavedStack = createStackNavigator({Saved});
const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    User: UserStack,
    Saved: SavedStack,
    Profile: ProfileStack,
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.white,
      inactiveTintColor: Colors.inactive,
      style: {
        backgroundColor: Colors.primary,
      },
      tabStyle: {
        // backgroundColor: 'black',
        // flex: 1,
        // justifyContent: 'flex-end',
        marginTop: 19,
        height: 35,
        // width: 10
      },
      showLabel: false,
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: (
        {tintColor}, // eslint-disable-line
      ) => <TabIcon icon={iconForTab(navigation)} tintColor={tintColor} />,
    }),
  },
);

export default AppStack;
