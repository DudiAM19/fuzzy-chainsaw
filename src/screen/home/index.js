import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  const [data, setData] = useState([]);
  return (
    <View>
      <Text style={{color: 'black'}}>Home</Text>
    </View>
  );
};

export default Home;
