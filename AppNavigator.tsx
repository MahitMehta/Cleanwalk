import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootupScreen from './src/pages/BootupScreen';
import SignupScreen from './src/pages/SignupScreen';
import SignupGeolocation from './src/pages/SignupScreen/Geolocation';
import LoginScreen from './src/pages/LoginScreen';

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
            }}
        />
          <Stack.Screen 
            name="signup-geolocation" 
            component={SignupGeolocation} 
            options={{
                headerShown: false,
                gestureEnabled: true,
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
         <Stack.Screen 
            name="login" 
            component={LoginScreen} 
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