import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({term, setTerm}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        clearButtonMode="while-editing"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => setTerm(newTerm)}
        // onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#E9F3FF',
    height: 37,
    borderRadius: 19,
    marginHorizontal: 31,
    // marginTop: 15,
    marginBottom: 17,
    // marginBottom: 15,
    flexDirection: 'row',
  },

  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 16,
    color: '#233064',
  },
  iconStyle: {
    fontSize: 17.03,
    alignSelf: 'center',
    marginHorizontal: 15,
    color: '#233064',
  },
});

export default SearchBar;
