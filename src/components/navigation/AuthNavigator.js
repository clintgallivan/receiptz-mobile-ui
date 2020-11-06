import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import Onboarding from '../Onboarding/Onboarding';
import Verify from '../Password/Verify';
import Confirm from '../Password/Confirm';
import Reset from '../Password/Reset';
import FinishedReset from '../Password/FinishedReset';
const AuthStack = createStackNavigator({
  Onboarding,
  Login,
  SignUp,
  Verify,
  Confirm,
  Reset,
  FinishedReset,
});

export default AuthStack;
