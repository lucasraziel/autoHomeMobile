import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#261643" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
