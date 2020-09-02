import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from '../Profile';
import Home from '../Home';
// import User from '../User'; //* This needs to be addressed


import receiptIcon from 'assets/ic_receipt/Receipt.png';
import profileIcon from 'assets/ic_profile/Profile.png';
import savedIcon from 'assets/ic_saved/Saved.png';
import settingsIcon from 'assets/ic_settings/Settings.png';



import Colors from 'helpers/Colors';


const iconForTab = ({ state }) => {
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

const TabIcon = ({ icon, tintColor }) => (// eslint-disable-line
  <Image
    source={icon}
    style={{ tintColor }}
  />
);

const ProfileStack = createStackNavigator({ Profile });
const HomeStack = createStackNavigator({ Home });
// const UserStack = createStackNavigator({ User }); //* This needs to be addressed
const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
    // User: UserStack, //* This needs to be addressed
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.white,
      inactiveTintColor: Colors.inactive,
      style: {
        backgroundColor: Colors.primary,
      },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (// eslint-disable-line
        <TabIcon
          icon={iconForTab(navigation)}
          tintColor={tintColor}
        />
      ),
    }),
  },
);

export default AppStack;
