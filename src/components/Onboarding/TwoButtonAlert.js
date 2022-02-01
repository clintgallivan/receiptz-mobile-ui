import {Alert, Linking} from 'react-native';

const TwoButtonAlert = () =>
  Alert.alert(
    'Your Location Services Are Not Set To Always!',
    'We need this to run...',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Go To Settings',
        onPress: () => {
          console.log('OK Pressed');
          Linking.openSettings();
        },
      },
    ],
    {cancelable: false},
  );

export default TwoButtonAlert;
