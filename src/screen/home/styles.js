import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.04,
  },
  textheader: {
    flexDirection: 'row',
    marginTop: width * 0.05,
  },
  textbold: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(25),
    color: '#2B2F3C',
  },
  textlight: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(22),
    color: '#727C98',
    marginHorizontal: width * 0.015,
    marginVertical: width * 0.01,
  },
  textinput: {
    backgroundColor: '#E6EAF3',
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    paddingTop: width / 33,
    fontFamily: 'Poppins-Medium',
  },
});
