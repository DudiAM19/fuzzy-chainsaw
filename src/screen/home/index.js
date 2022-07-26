import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  const [data, setData] = useState([]);
  return (
    <View>
      <Text style={{color: 'black', fontFamily: 'Poppins-SemiBold'}}>Home</Text>
    </View>
  );
};

export default Home;
