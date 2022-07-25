import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home"
import Profile from './screens/Profile';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));
const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="launch"
          screenOptions={{ gestureEnabled: false }}>
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Profile" component={Profile} options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}