import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootupScreen from './src/pages/BootupScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;