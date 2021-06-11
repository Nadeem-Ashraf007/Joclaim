import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './app//Screens/redux/store';
import Routes from './app/Screens/navigations/Routes';
// import {LocalizationProvider} from './app/Screens/localization/LocalizationContext';
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
