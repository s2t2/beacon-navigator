import React from 'react';
import {AppRegistry, Text, Alert, DeviceEventEmitter} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, List, ListItem, Spinner} from 'native-base';

import {styles} from "./lib/styles";
import {beaconsDidRangeResult} from "./lib/beacons_did_range_example_result";

//import BeaconsIndexPage from "./components/BeaconsIndexPage"

const BeaconNavigator = React.createClass({
  getInitialState: function(){
    console.log("INDEX GETTING INITIAL STATE")
    return {nearbyBeacons:[], displaySpinner:false}
  },

  componentWillMount: function(){  console.log("INDEX WILL MOUNT")  },

  componentDidMount: function(){  console.log("INDEX DID MOUNT")  },

  componentWillUnmount: function(){  console.log("INDEX WILL UNMOUNT")  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text style={styles.title}>Beacon Navigator</Text>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Tap the button to detect nearby points of interest based on proximity to Bluetooth beacons.</Text>

          {this.state.displaySpinner ? <Spinner color="#428bca" size="large"/> : null}
        </Content>

        <Footer style={styles.footer}>
          <Button style={styles.button} onPress={this.handleButtonPress}>
            <Icon name="ios-radio-outline" />
          </Button>
        </Footer>
      </Container>
    );
  },

  handleButtonPress: function(){
    this.setState({displaySpinner: true})
    var component = this;
    setTimeout(function(){
      component.setState({
        displaySpinner: false,
        nearbyBeacons: beaconsDidRangeResult
      })
    }, 5000);
  }

});

AppRegistry.registerComponent('BeaconNavigator', function(){
  return BeaconNavigator;
});
