/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { Text } from 'react-native';

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
