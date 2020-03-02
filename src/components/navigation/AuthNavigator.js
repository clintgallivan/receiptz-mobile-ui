import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Login';
import SignUp from '../SignUp';


const AuthStack = createStackNavigator({ Login, SignUp });

export default AuthStack;
