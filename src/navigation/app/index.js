import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screen';

const AppStack = createNativeStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen component={Home} name="home" />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
