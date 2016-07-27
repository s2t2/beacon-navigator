import React from 'react';
import {AppRegistry, Navigator} from 'react-native';

import HomePage from "./components/HomePage"
import PlacesIndexPage from "./components/PlacesIndexPage"
import PlacesShowPage from "./components/PlacesShowPage"

const App = React.createClass({
  componentWillMount: function(){  console.log("APP WILL MOUNT")  },
  componentDidMount: function(){  console.log("APP DID MOUNT")  },
  componentWillUnmount: function(){  console.log("APP WILL UNMOUNT")  },

  renderScene(route, navigator) {
    switch (route.name) {
      case 'Home':
        return <HomePage navigator={navigator} {...route.passProps}  />
        break;
      case 'Places':
        return <PlacesIndexPage navigator={navigator} {...route.passProps}  />
        break;
      case 'Place':
        return <PlacesShowPage navigator={navigator} {...route.passProps}  />
        break;
    }
  },

  configureScene(route, routeStack){
    if(route.type == 'Back') {
      return Navigator.SceneConfigs.FloatFromLeft;
    } else {
      return Navigator.SceneConfigs.PushFromRight;
    }
  },

  render: function(){
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Home' }}
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />
    );
  }
});

AppRegistry.registerComponent('BeaconNavigator', function(){  return App;  });
