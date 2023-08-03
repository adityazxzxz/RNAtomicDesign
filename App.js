import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Text, Box } from "native-base";
import { Provider } from "react-redux";
import { store } from './src/redux/store'

import Onboard from "./src/screens/onboard/Onboard";
import OnboardOne from "./src/screens/onboard/OnboardOne";
import OnboardTwo from "./src/screens/onboard/OnboardTwo";
import OnboardThree from "./src/screens/onboard/OnboardThree";
import Register from "./src/screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboard">
            <Stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardOne" component={OnboardOne} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardTwo" component={OnboardTwo} options={{ headerShown: false }} />
            <Stack.Screen name="OnboardThree" component={OnboardThree} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}