import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import LoginButton from '../common/LoginButton';
import SignupButton from '../common/SignupButton';
import Logo from '../common/Logo';
import TextField from '../common/TextField';
import ErrorView from '../common/ErrorView';
import styles from './styles';

import Colors from '../../helpers/Colors';
import ShadowStyles from 'helpers/ShadowStyles';
import TextStyles from 'helpers/TextStyles';
import getUser from 'selectors/UserSelectors';
import errorsSelector from 'selectors/ErrorSelectors';
import {isLoadingSelector} from 'selectors/StatusSelectors';
import strings from 'localization';
import {signup, actionTypes} from 'actions/UserActions';
import navigation from 'components/navigation';

function SignUp(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => getUser(state));
  const isLoading = useSelector(state =>
    isLoadingSelector([actionTypes.LOGIN], state),
  );
  const errors = useSelector(state =>
    errorsSelector([actionTypes.LOGIN], state),
  );

  const dispatch = useDispatch();
  const loginUser = useCallback(
    () => dispatch(signup(email, password, firstName, lastName)),
    [email, password, firstName, lastName, dispatch],
  );
  const firstNameChanged = useCallback(value => setFirstName(value), []);
  const lastNameChanged = useCallback(value => setLastName(value), []);
  const passwordChanged = useCallback(value => setPassword(value), []);
  const emailChanged = useCallback(value => setEmail(value), []);

  useEffect(() => {
    if (user !== null) {
      props.navigation.navigate('App');
    }
  });

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.entryContainer}>
        <View style={[styles.formContainer]}>
          <TextField
            style={styles.textInputStyle}
            placeholder={strings.firstName}
            onChangeText={firstNameChanged}
            value={firstName}
            placeholderTextColor={Colors.inputTextColor}
          />
        </View>
        <View style={[styles.formContainer]}>
          <TextField
            style={styles.textInputStyle}
            placeholder={strings.lastName}
            value={lastName}
            onChangeText={lastNameChanged}
            placeholderTextColor={Colors.inputTextColor}
          />
        </View>
        <View style={[styles.formContainer]}>
          <TextField
            style={styles.textInputStyle}
            placeholder={strings.email}
            onChangeText={emailChanged}
            value={email}
            placeholderTextColor={Colors.inputTextColor}
          />
        </View>
        <View style={[styles.formContainer]}>
          <TextField
            style={styles.textInputStyle}
            placeholder={strings.password}
            value={password}
            onChangeText={passwordChanged}
            secureTextEntry
            placeholderTextColor={Colors.inputTextColor}
          />
        </View>
        <ErrorView errors={errors} />

        <LoginButton
          style={styles.signup}
          onPress={loginUser}
          title={isLoading ? strings.loading : strings.createAccount}
        />
        <LoginButton
          style={styles.login}
          onPress={() => props.navigation.push('Login')}
          title={strings.login}
        />
        {/* <View style={styles.signup}>
          <TouchableOpacity>
            <Text
              style={styles.signupText}
              onPress={() => props.navigation.push('Login')}>
              {strings.login}
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

SignUp.navigationOptions = {
  header: null,
};

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUp;
