'use strict';

import {StyleSheet} from 'react-native';

module.exports = {};

module.exports.styles = StyleSheet.create({
  container:{
  },
  header: {
    backgroundColor: "#428bca"
  },
  title: {
  },
  content:{
    margin:20
  },
  text:{
    textAlign: 'center'
  },
  footer:{
    /* align child button on the right-side of the screen */
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  button:{
    marginRight:3,
    borderRadius:50
  }
});
