import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import BootupScreen from './src/pages/BootupScreen';
import SignupScreen from './src/pages/SignupScreen';
import SignupGeolocation from './src/pages/SignupScreen/Geolocation';
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/homeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName='bootup'>
      <Stack.Screen 
              name="home" 
              component={HomeScreen} 
              options={{
                  headerBackVisible: false,
                  gestureEnabled: false
              }}
          />
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