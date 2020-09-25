import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import Onboarding from '../Onboarding/Onboarding';

const AuthStack = createStackNavigator({Onboarding, Login, SignUp});

export default AuthStack;
