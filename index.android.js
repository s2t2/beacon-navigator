import React from 'react';
import {AppRegistry, Navigator, View, Text, TouchableHighlight} from 'react-native';

import HomePage from "./components/HomePage"
import BeaconsIndexPage from "./components/BeaconsIndexPage"

const App = React.createClass({
  componentWillMount: function(){  console.log("APP WILL MOUNT")  },
  componentDidMount: function(){  console.log("APP DID MOUNT")  },
  componentWillUnmount: function(){  console.log("APP WILL UNMOUNT")  },

  renderScene(route, navigator) {
    if(route.name == 'Home') {
      return <HomePage navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'BeaconsIndex') {
      return <BeaconsIndexPage navigator={navigator} {...route.passProps}  />
    }
  },

  render: function(){
    return (
      <Navigator style={{ flex:1 }} initialRoute={{ name: 'Home' }} renderScene={ this.renderScene } />
    );
  }
});

AppRegistry.registerComponent('BeaconNavigator', function(){  return App;  });
