import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Text, Box } from "native-base";
import { Provider } from "react-redux";
import { store } from './src/redux/store'

import Onboard from "./src/screens/onboard/Onboard";
import Home from "./src/screens/Home";
import QRInput from "./src/screens/QRInput";
import PIN from "./src/screens/PIN";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboard">
            <Stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="QRInput" component={QRInput} options={{ headerShown: false }} />
            <Stack.Screen name="PIN" component={PIN} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}