import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../common/Button';
import Logo from '../common/Logo';
import TextField from '../common/TextField';
import ErrorView from '../common/ErrorView';
import styles from './styles';

import ShadowStyles from 'helpers/ShadowStyles';
import TextStyles from 'helpers/TextStyles';
import getUser from 'selectors/UserSelectors';
import errorsSelector from 'selectors/ErrorSelectors';
import { isLoadingSelector } from 'selectors/StatusSelectors';
import strings from 'localization';
import { signup, actionTypes } from 'actions/UserActions';

function SignUp(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => getUser(state));
  const isLoading = useSelector(state => isLoadingSelector([actionTypes.LOGIN], state));
  const errors = useSelector(state => errorsSelector([actionTypes.LOGIN], state));

  const dispatch = useDispatch();
  const loginUser = useCallback(() => dispatch(signup(email, password, firstName, lastName)), [email, password, firstName, lastName, dispatch]);
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
            placeholder={strings.firstName}
            onChangeText={firstNameChanged}
            value={firstName}
          />
        </View>
        <View style={[styles.formContainer]}>
          <TextField
            placeholder={strings.lastName}
            value={lastName}
            onChangeText={lastNameChanged}
          />
        </View>
        <View style={[styles.formContainer]}>
          <TextField
            placeholder={strings.email}
            onChangeText={emailChanged}
            value={email}
          />
        </View>
        <View style={[styles.formContainer]}>
          <TextField
            placeholder={strings.password}
            value={password}
            onChangeText={passwordChanged}
            secureTextEntry
          />
        </View>
        <ErrorView errors={errors} />
        <Button
          style={styles.login}
          onPress={loginUser}
          title={isLoading ? strings.loading : strings.signup}
        />
        <View style={styles.signup}>
        <TouchableOpacity>

        <Text style={styles.signupText} onPress={() => props.navigation.navigate('Login')}>
          {strings.login}
        </Text>
        </TouchableOpacity>
        </View>
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
