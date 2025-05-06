import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './Context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
