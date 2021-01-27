import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withTheme, Colors} from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabNavigator = ({theme}) => {
  const {colors} = theme;
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.red700,
        inactiveTintColor: colors.light,
        activeBackgroundColor: colors.otherBlack,
        style: {
          backgroundColor: 'white',
          width: '90%',
          position: 'absolute',
          bottom: '1%',
          left: '5%',
          right: '5%',
          height: '10%',
          borderRadius: 18,
          elevation: 1,
          borderTopWidth: 0,
          opacity: 0.8,
        },
        tabStyle: {
          borderRadius: 50,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default withTheme(TabNavigator);
