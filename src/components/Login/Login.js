import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import LoginButton from '../common/LoginButton';
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
import {login, actionTypes} from 'actions/UserActions';

function Login(props) {
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
  const loginUser = useCallback(() => dispatch(login(email, password)), [
    email,
    password,
    dispatch,
  ]);
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
        <View style={styles.formContainer}>
          <TextField
            style={styles.textInputStyle}
            placeholder={strings.email}
            placeholderTextColor={Colors.inputTextColor}
            onChangeText={emailChanged}
            value={email}
          />
        </View>
        <View style={styles.formContainer}>
          <TextField
            style={styles.textInputStyle}
            placeholder={strings.password}
            placeholderTextColor={Colors.inputTextColor}
            value={password}
            onChangeText={passwordChanged}
            secureTextEntry
          />
        </View>
        <ErrorView errors={errors} />
        <LoginButton style={styles.login} />
        <LoginButton
          style={styles.login}
          onPress={loginUser}
          title={isLoading ? strings.loading : strings.login}
        />
        <View style={styles.signup}>
          <TouchableOpacity>
            <Text
              style={styles.signupText}
              onPress={() => {
                props.navigation.navigate('SignUp');
              }}>
              {strings.signup}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

Login.navigationOptions = {
  header: null,
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
