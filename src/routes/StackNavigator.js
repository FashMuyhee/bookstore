import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Login, Book, Home} from '../screens';
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
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="book" component={Book} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
