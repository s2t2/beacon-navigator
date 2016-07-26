import React from 'react';
import {AppRegistry, Text, Alert, DeviceEventEmitter} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, List, ListItem} from 'native-base';
//import Beacons from 'react-native-beacons-android';

import {styles} from "./lib/styles";
import {lookupTable} from "./lib/lookup_table";

const BeaconNavigator = React.createClass({

  //
  // REACT COMPONENT LIFECYCLE EVENTS
  //

  getInitialState: function(){
    console.log("GETTING INITIAL STATE")
    return {nearbyBeacons:[]}
  },

  componentWillMount: function(){
    console.log("COMPONENT WILL MOUNT")
    //Beacons.detectIBeacons();
    //Beacons.startRangingBeaconsInRegion('REGION1')
    //  .then(function(){  console.log("Beacon Ranging OK")  })
    //  .catch(function(error){  console.log("Beacon Ranging ERR", err)  })
  },

  componentDidMount: function(){
    console.log("COMPONENT DID MOUNT")
    //this.beaconsDidRange = DeviceEventEmitter.addListener("beaconsDidRange", this.emitBeaconData);
  },

  componentWillUnmount: function(){
    console.log("COMPONENT WILL UNMOUNT")
    //this.beaconsDidRange = null;
  },

  //
  // REACT COMPONENT RENDER METHOD
  //

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

  //
  // BEACON INSTANCE METHODS
  //

  beaconId: function(beacon){
    return beacon.uuid + "..." + beacon.major + "..." + beacon.minor
  },

  beaconPrettyProximity: function(beacon){
    if (beacon) {
      return beacon.proximity.toLocaleUpperCase() + " @ " + beacon.distance.toFixed(2) + " meters (" + beacon.rssi + " strength)"
    } else {
      return "N/A"
    }
  },

  beaconProximity: function(beacon){
    if (beacon) {
      return beacon.proximity.toLocaleUpperCase()
    } else {
      return "N/A"
    }
  },

  beaconDistance: function(beacon){
    if (beacon) {
      return beacon.distance.toFixed(2)
    } else {
      return "N/A"
    }
  },

  beaconStrength: function(beacon){
    if (beacon) {
      return beacon.rssi
    } else {
      return "N/A"
    }
  },

  //
  // BEACON DETECTION LOGGER METHODS
  //

  //
  // This function controls what happens with the results of beacon-detection efforts.
  //
  emitBeaconData: function(data){
    //this.logBeacons(data.beacons)
    //this.logProximityOfKnownBeacons(data.beacons)
    this.logProximityOfKnownBeaconsToCSV(data.beacons)
    //this.setState({nearbyBeacons: data.beacons});
  },

  //
  // Use this function to more easily understand which beacons are nearby.
  //
  logBeacons: function(beacons){
    var component = this;
    var near = beacons.filter(function(b){  return b.proximity == "near" })
    var far = beacons.filter(function(b){  return b.proximity == "far" })
    var whereverYouAre = beacons.filter(function(b){  return b.proximity == "immediate" })
    console.log("------------------")
    console.log("NOW:", Date.now())
    console.log("LOC:", whereverYouAre.map(function(b){  return component.beaconId(b)  }))
    console.log("NEAR:", near.map(function(b){  return component.beaconId(b)  }))
    console.log("FAR :", far.map(function(b){  return component.beaconId(b)  }))
  },

  //
  // Use this function to track the proximity of known beacons over time.
  //
  logProximityOfKnownBeacons: function(beacons){
    var component = this;
    var purple = beacons.filter(function(b){  return component.beaconId(b) == component.beaconId(lookupTable["PURPLE"]) })[0]
    var blue = beacons.filter(function(b){  return component.beaconId(b) == component.beaconId(lookupTable["BLUE"]) })[0]
    var green = beacons.filter(function(b){  return component.beaconId(b) == component.beaconId(lookupTable["GREEN"]) })[0]
    console.log("------------------")
    console.log("NOW:", Date.now())
    console.log("PURPLE:", component.beaconPrettyProximity(purple))
    console.log("BLUE:", component.beaconPrettyProximity(blue))
    console.log("GREEN:", component.beaconPrettyProximity(green))
  },

  //
  // Use this function to track the proximity of known beacons over time
  // ... to CSV format with pipe-delimited values
  // ... using the column names: "timestamp | purple_prox | purple_dist | purple_strength | blue_prox | blue_dist | blue_strength | green_prox | green_dist | green_strength"
  //
  logProximityOfKnownBeaconsToCSV: function(beacons){
    var component = this;
    var purple = beacons.filter(function(b){  return component.beaconId(b) == component.beaconId(lookupTable["PURPLE"]) })[0]
    var blue = beacons.filter(function(b){  return component.beaconId(b) == component.beaconId(lookupTable["BLUE"]) })[0]
    var green = beacons.filter(function(b){  return component.beaconId(b) == component.beaconId(lookupTable["GREEN"]) })[0]
    console.log(
      Date.now() +
      " | " + component.beaconProximity(purple) +
      " | " + component.beaconDistance(purple) +
      " | " + component.beaconStrength(purple) +
      " | " + component.beaconProximity(blue) +
      " | " + component.beaconDistance(blue) +
      " | " + component.beaconStrength(blue) +
      " | " + component.beaconProximity(green) +
      " | " + component.beaconDistance(green) +
      " | " + component.beaconStrength(green)
    )
  },

  //
  // ALERT METHODS
  //

  alertTitle: "Alert Title",
  alertMessage: "This is an Alert Message",
  triggerAlert: function(){
    return Alert.alert(this.alertTitle, this.alertMessage)
  }
});

AppRegistry.registerComponent('BeaconNavigator', function(){
  return BeaconNavigator;
});
