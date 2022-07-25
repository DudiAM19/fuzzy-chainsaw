import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStackScreen from './app';
import {Splash} from '../screen';

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="App" component={AppStackScreen} />
    </RootStack.Navigator>
  );
};

const RootNavigator = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
