import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  LogBox,
} from 'react-native';
const {width} = Dimensions.get('window');
LogBox.ignoreAllLogs();

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../../assets/logo.png')}
        style={{width: width * 0.55, height: width * 0.55}}
      />
    </View>
  );
};

export default Splash;
