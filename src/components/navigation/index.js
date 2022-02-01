import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthHandler from './AuthHandler';
import Auth from './AuthNavigator';
import App from './AppNavigator';
import Onboarding from '../Onboarding/Onboarding';

export default createAppContainer(
  // eslint-disable-line
  createSwitchNavigator(
    {
      App,
      Auth,
      AuthHandler,
      Onboarding,
    },
    {
      initialRouteName: 'Auth',
      // initialRouteName: 'Onboarding',
    },
  ),
); // eslint-disable-line
