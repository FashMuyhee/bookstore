import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Book} from '../screens';
import TabNavigator from './TabNavigator';
import {Context} from '../store/context';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [state] = useContext(Context);

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="login"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="home" component={TabNavigator} />
      <Stack.Screen name="book" component={Book} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
