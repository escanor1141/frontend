import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; 

// Crea el Stack Navigator
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true, 
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio' }} 
      />
      {/* AEsto es para agregar más pantallas --> usando más <Stack.Screen /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
