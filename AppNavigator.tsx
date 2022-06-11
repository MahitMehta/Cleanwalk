import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootupScreen from './src/pages/BootupScreen';
import SignupScreen from './src/pages/BootupScreen/SignupScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="bootup" 
            component={BootupScreen} 
            options={{
                headerShown: false,
                gestureEnabled: false,
            }}
        />
        <Stack.Screen 
            name="signup" 
            component={SignupScreen} 
            options={{
                headerShown: false,
                gestureEnabled: true,
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;