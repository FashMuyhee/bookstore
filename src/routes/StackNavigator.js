import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Book} from '../screens';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="login"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="home" component={TabNavigator} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="book" component={Book} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
