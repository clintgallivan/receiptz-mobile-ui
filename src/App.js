import React, {useState, useEffect, Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './components/navigation';
import Colors from './helpers/Colors';
import {store, persist} from './reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

const App = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    persist(() => {
      setReady(true);
    });
  });

  const loading = (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );

  const loaded = (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );

  return ready ? loaded : loading;
};

export default App;
