import React from 'react';
import {AppRegistry, Navigator, View, Text, TouchableHighlight} from 'react-native';

//import HomePage from "./components/HomePage"
//import BeaconsIndexPage from "./components/BeaconsIndexPage"

const App = React.createClass({
  componentWillMount: function(){  console.log("APP WILL MOUNT")  },
  componentDidMount: function(){  console.log("APP DID MOUNT")  },
  componentWillUnmount: function(){  console.log("APP WILL UNMOUNT")  },

  renderScene(route, navigator) {
    if(route.name == 'Home') {
    	return <Home navigator={navigator} {...route.passProps}  />
    }
  	if(route.name == 'Main') {
    	return <Main navigator={navigator} {...route.passProps}  />
    }
  },

  render: function(){
    return (
      <Navigator style={{ flex:1 }} initialRoute={{ name: 'Main' }} renderScene={ this.renderScene } />
    );
  }
});

var Main = React.createClass({
  componentWillMount: function(){  console.log("MAIN WILL MOUNT")  },
  componentDidMount: function(){  console.log("MAIN DID MOUNT")  },
  componentWillUnmount: function(){  console.log("MAIN WILL UNMOUNT")  },

  _navigate(name) {
  	this.props.navigator.push({
    	name: 'Home',
      passProps: {
      	name: name
      }
    })
  },

	render() {
    return (
    	<View>
      	<Text>Hello from Main</Text>
 				<TouchableHighlight onPress={ () => this._navigate('YOYOYOYOYO') }>
      		<Text>GO GO GO</Text>
      	</TouchableHighlight>
      </View>
    )
  }
})

var Home = React.createClass({
  componentWillMount: function(){  console.log("HOME WILL MOUNT")  },
  componentDidMount: function(){  console.log("HOME DID MOUNT")  },
  componentWillUnmount: function(){  console.log("HOME WILL UNMOUNT")  },

	render() {
    return (
    	<View>
      	<Text>Hello from { this.props.name }</Text>
 				<TouchableHighlight onPress={ () => this.props.navigator.pop() }>
      		<Text>GO Back</Text>
      	</TouchableHighlight>
      </View>
    )
  }
})

AppRegistry.registerComponent('BeaconNavigator', function(){  return App;  });
