import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import styles from './styles';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {handleData} from '../../redux/actions';
import {CollapseComponent} from '../../component';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleData());
  }, []);

  const {data} = useSelector(
    ({appReducer}) => ({
      data: appReducer.data,
    }),
    shallowEqual,
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textheader}>
        <Text style={styles.textbold}>Find</Text>
        <Text style={styles.textlight}>your prayer</Text>
      </View>
      <View>
        <TextInput placeholder="Search" style={styles.textinput} />
      </View>
      <View style={{marginVertical: 10}}>
        <CollapseComponent />
      </View>
    </SafeAreaView>
  );
};

export default Home;
