import React from 'react';
import {AppRegistry, Text, Alert, DeviceEventEmitter} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, List, ListItem} from 'native-base';
import Beacons from 'react-native-beacons-android';

import {styles} from "./lib/styles";

const BeaconNavigator = React.createClass({

  getInitialState: function(){
    console.log("GETTING INITIAL STATE")
    return {nearbyBeacons:[]}
  },

  componentWillMount: function(){
    console.log("COMPONENT WILL MOUNT")
    Beacons.detectIBeacons();
    Beacons.startRangingBeaconsInRegion('REGION1')
      .then(function(){  console.log("Beacon Ranging OK")  })
      .catch(function(error){  console.log("Beacon Ranging ERR", err)  })
  },

  componentDidMount: function(){
    var component = this;
    console.log("COMPONENT DID MOUNT")
    this.beaconsDidRange = DeviceEventEmitter.addListener("beaconsDidRange", function(data){
      component.prettyLogBeacons(data.beacons)
      //this.setState({nearbyBeacons: data.beacons});
    });
  },

  componentWillUnmount: function(){
    console.log("COMPONENT WILL UNMOUNT")
    this.beaconsDidRange = null;
  },

  render: function(){
    var component = this;
    var beacons = component.state.nearbyBeacons;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text style={styles.title}>Beacon Navigator</Text>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Tap the button to detect nearby points of interest based on proximity to Bluetooth beacons.</Text>
          <List>
            {
              beacons.map(function(beacon){
                return (
                  <ListItem key={component.beaconId(beacon)} itemDivider={component.isEvenNumber(beacons.indexOf(beacon))}>
                    <Text>{component.beaconId(beacon)} ({beacon.distance.toFixed(2)} meters)</Text>
                  </ListItem>
                );
              })
            }
          </List>
        </Content>

        <Footer style={styles.footer}>
          <Button style={styles.button} onPress={this.triggerAlert}>
            <Icon name="ios-radio-outline" />
          </Button>
        </Footer>
      </Container>
    );
  },

  isEvenNumber: function(listItemIndex){
    console.log("INDEX", listItemIndex, "SHOULD BE DIVIDED?", (listItemIndex % 2) == 0)
    return (listItemIndex % 2) == 0
  },

  beaconId: function(beacon){
    return beacon.uuid + "..." + beacon.major + "..." + beacon.minor
  },

  prettyLogBeacons: function(beacons){
    var component = this;
    var near = beacons.filter(function(b){  return b["proximity"] == "near" })
    var far = beacons.filter(function(b){  return b["proximity"] == "far" })
    var whereverYouAre = beacons.filter(function(b){  return b["proximity"] == "immediate" })
    //console.log(
    //  "NOW:", Date.now(),
    //  //"ALL:", beacons.length, beacons.map(function(b){  return component.beaconId(b)  }),
    //  "LOC :", whereverYouAre.map(function(b){  return component.beaconId(b)  }),
    //  "NEAR:", near.map(function(b){  return component.beaconId(b)  }),
    //  "FAR :", far.map(function(b){  return component.beaconId(b)  })
    //)
    console.log("------------------")
    console.log("NOW:", Date.now())
    console.log("LOC:", whereverYouAre.map(function(b){  return component.beaconId(b)  }))
    console.log("NEAR:", near.map(function(b){  return component.beaconId(b)  }))
    console.log("FAR :", far.map(function(b){  return component.beaconId(b)  }))
  },

  alertTitle: "Alert Title",
  alertMessage: "This is an Alert Message",
  triggerAlert: function(){
    return Alert.alert(this.alertTitle, this.alertMessage)
  }
});

AppRegistry.registerComponent('BeaconNavigator', function(){
  return BeaconNavigator;
});
