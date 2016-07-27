import React from 'react';
import {AppRegistry, Navigator} from 'react-native';

import HomePage from "./components/HomePage";
import BeaconsIndexPage from "./components/beacons/IndexPage";
import BeaconsShowPage from "./components/beacons/ShowPage";

// This component controls navigation between other components.
const App = React.createClass({
  componentWillMount: function(){  console.log("APP WILL MOUNT")  },
  componentDidMount: function(){  console.log("APP DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("APP WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("APP WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("APP DID UPDATE")  },
  componentWillUnmount: function(){  console.log("APP WILL UNMOUNT")  },

  renderScene(route, navigator) {
    switch (route.name) {
      case 'Home':
        return <HomePage navigator={navigator} {...route.passProps}  />
        break;
      case 'Beacons':
        return <BeaconsIndexPage navigator={navigator} {...route.passProps}  />
        break;
      case 'Beacon':
        return <BeaconsShowPage navigator={navigator} {...route.passProps}  />
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
        initialRoute={{ name: 'Home' }} // Specify which component should show up when the app is loaded.
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />
    );
  }
});

AppRegistry.registerComponent('BeaconNavigator', function(){  return App;  });
