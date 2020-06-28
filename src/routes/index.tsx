import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Room from '../pages/Room';

const App = createStackNavigator();

const Route: React.FunctionComponent = () => {
  return (
    <App.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#261643' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen
        name="Room"
        component={Room}
        initialParams={{ roomName: '' }}
      />
    </App.Navigator>
  );
};

export default Route;

export type RootStackParamList = {
  Dashboard: undefined;
  Room: { roomName: string };
};
