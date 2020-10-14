import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import strings from 'localization';
import Colors from '../../helpers/Colors';
import HeaderStyles from 'helpers/HeaderStyles';
// import styles from 'helpers/TextStyles';

const SettingItemEdit = props => {
  const [editItemValue, setEditItemValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        clearButtonMode="while-editing"
      />
      <View style={styles.line} />
      <TextInput
        placeholder="Email"
        value={editItemValue}
        style={styles.textInput}
        clearButtonMode="while-editing"
      />
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 31,
  },
  textInput: {
    // backgroundColor: 'blue',
    // marginHorizontal: 31,
    // marginTop: 20,
    color: Colors.inputTextColor,
    fontSize: 14,
    marginHorizontal: 31,
    paddingVertical: 18,
  },
  line: {
    backgroundColor: Colors.gray,
    marginTop: 2,
    marginHorizontal: 31,
    height: 1,
    // flexDirection: 'column',
    alignSelf: 'stretch',
  },
});

SettingItemEdit.navigationOptions = {
  title: strings.settings,
  headerBackTitle: strings.back,
  headerBackTitleStyle: {
    color: 'red',
  },
  headerTitleStyle: {
    color: Colors.primaryText,
    fontFamily: 'AvenirNext-Bold',
  },
  headerStyle: HeaderStyles.appHeader,
};

export default SettingItemEdit;
