import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {handleData} from '../../redux/actions';
import {CollapseComponent} from '../../component';

const Home = () => {
  const [newData, setNewData] = useState([]);
  const [isLoading, setIsLoading] = useState(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleData());
  }, []);

  useEffect(() => {
    setNewData(data);
  }, [data]);

  const {data, loading} = useSelector(
    ({appReducer}) => ({
      loading: appReducer.loading,
      data: appReducer.data,
    }),
    shallowEqual,
  );

  const handleCollapse = title => {
    if (data.length == undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      // const dataChange = data.map(val => {
      //   if (val.title == title) {
      //     return {
      //       ...val,
      //       isExpanded: !val.isExpanded,
      //     };
      //   }
      //   return val.isExpanded;
      // });
      // setNewData(dataChange);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textheader}>
        <Text style={styles.textbold}>Find</Text>
        <Text style={styles.textlight}>your prayer</Text>
      </View>
      <View>
        <TextInput placeholder="Search" style={styles.textinput} />
      </View>
      {isLoading == true ||
      newData.length == 0 ||
      newData.length == undefined ? (
        <View style={{marginVertical: 20}}>
          <ActivityIndicator size="large" color="#b1ff99" />
        </View>
      ) : (
        <ScrollView
          style={{paddingVertical: 10}}
          showsVerticalScrollIndicator={false}>
          {newData.map(val => {
            console.log(val.isExpanded);
            return (
              <CollapseComponent
                title={val.doa}
                onToggle={() => handleCollapse(val.title)}
                isExpanded={val.isExpanded}
                ayat={val.ayat}
                latin={val.latin}
                arti={val.artinya}
              />
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
