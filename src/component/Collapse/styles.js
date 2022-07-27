import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  collapseheader: isExpanded => ({
    backgroundColor: '#b1ff99',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderBottomLeftRadius: isExpanded == true ? 0 : 10,
    borderBottomRightRadius: isExpanded == true ? 0 : 10,
    borderBottomWidth: isExpanded == true ? 0 : 0.5,
    borderWidth: 0.5,
  }),
  textcollapseheader: {
    fontFamily: 'Poppins-Regular',
  },
  collapsebody: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // borderBottomWidth: 0.5,
    // borderLeftWidth: 0.5,
    // borderRightWidth: 0.5,
  },
  texttitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    marginRight: 10,
  },
  textquran: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginVertical: 10,
  },
  textlatin: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginVertical: 10,
    marginLeft: 15,
  },
});
