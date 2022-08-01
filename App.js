// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homescreen';
import Home from './Home';





const App =() => { 
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name="welcome" component={Homescreen} />
        <Stack.Screen name="second" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;