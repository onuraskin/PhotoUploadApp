import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './src/pages/MainPage/MainPage';
import UploadPage from './src/pages/UploadPage/UploadPage';
import {Provider} from 'react-redux';
import reduxStore from './src/Store/index';
import {PersistGate} from 'redux-persist/integration/react';
//Stack-Call
const Stack = createNativeStackNavigator();

const App = () => {
  const {store, persistor} = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="UploadPage" component={UploadPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
