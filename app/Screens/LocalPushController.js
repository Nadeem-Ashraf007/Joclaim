import PushNotification from 'react-native-push-notification';
import Platform from 'react-native';
PushNotification.createChannel({
  channelId: 'channel-id', // (required)
  channelName: 'My channel', // (required)
  channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
  soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
  importance: 4, // (optional) default: 4. Int value of the Android notification importance
  vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
});
(created) => console.log(`createChannel returned '${created}'`); // (optional) callback returns whether the channel was created, false means it already existed.);
export const LocalNotification = () => {
  PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]',
    channelId: 'your-channel-id',
  });
};
