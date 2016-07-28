import React from 'react';
import {Text, Alert, DeviceEventEmitter} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Spinner} from 'native-base';
import Beacons from 'react-native-beacons-android';

import {styles} from "../lib/styles";
import {beaconsDidRangeResult} from "../lib/beacons_did_range_example_result";
import {beaconId, mergeBeaconDetails, logBeacons, logBeaconsToCSV, logKnownBeacons, logKnownBeaconsToCSV, synthesizeDetections, mergeBeaconDetailsWithSynthesizedResults} from "../lib/beacons_helper";

const HomePage = React.createClass({
  getInitialState: function(){
    return {displaySpinner:false, detections:[]};
  },

  componentWillMount: function(){
    console.log("HOME WILL MOUNT");
    Beacons.detectIBeacons();
    Beacons.startRangingBeaconsInRegion('REGION1')
      .then(function(){  console.log("Beacon Ranging OK")  })
      .catch(function(error){  console.log("Beacon Ranging ERR", error)  });
  },

  componentDidMount: function(){
    console.log("HOME DID MOUNT");
    this.beaconsDidRange = DeviceEventEmitter.addListener("beaconsDidRange", this.emitBeaconData);
  },

  componentWillReceiveProps: function(nextProps){  console.log("HOME WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("HOME WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("HOME DID UPDATE")  },

  componentWillUnmount: function(){
    console.log("HOME WILL UNMOUNT");
    this.stopDetectingBeacons();
  },

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
      var results = beaconsDidRangeResult; //TODO: stop mocking and get real response
      var beacons = mergeBeaconDetails(results);
      if (beacons.length > 0) {
        console.log("DETECTED SOME BEACONS");
        component.setState({displaySpinner: false});
        component.goIndex(beacons);
      } else {
        console.log("DETECTED ZERO BEACONS");
        component.setState({displaySpinner: false});
        return Alert.alert("No Beacons Nearby", "Hey, it looks like there aren't any Bluetooth beacons around you right now. Why don't you try again after moving to a different location?");
      };
    }, 1000);
  },

  // This function controls what happens with the results of beacon-detection efforts.
  // @param [Object] data A complete beaconsDidRangeResult. See data/mocks/beacons-did-range/ for examples.
  emitBeaconData: function(data){
    //console.log(data.beacons);
    //logBeacons(data.beacons);
    //logBeaconsToCSV(data.beacons);
    //logKnownBeacons(data.beacons);
    //logKnownBeaconsToCSV(data.beacons);

    var detections = this.state.detections;
    console.log("---------------------")
    console.log("STATE CONTAINS APPROX. " + detections.length + " DETECTIONS"); // detections count increments by 1,2, or 3 instead of always by 1. this could be a function of timing, where state updates faster than the console can log?
    if (detections.length >= 10) {
      //
      // PREVENT INFINITE LOOPS!!!
      //
      this.setState({detections:[]}) // prevent this collection from growing out of hand, perhaps preventing memory management issues/crashes, but definitely preventing an infinite loop of mistaken detection counts.
      this.stopDetectingBeacons();

      //
      // NAVIGATE TO INDEX PAGE
      //
      var synthesizedResults = synthesizeDetections(detections);
      var beacons = mergeBeaconDetailsWithSynthesizedResults(synthesizedResults);
      this.goIndex(beacons); // for now, short-cutting the UX to automatically navigate.
    } else {
      this.setState({detections: this.state.detections.concat(data.beacons)}); // append new detection results into state.
    };
  },

  stopDetectingBeacons(){
    this.beaconsDidRange = null;
    Beacons.stopRangingBeaconsInRegion('REGION1')
      .then(function(){  console.log("Beacon Ranging Stopped OK")  })
      .catch(function(error){  console.log("Beacon Ranging Stopped With ERR", error)  });
  },

  goIndex(beacons){
    this.props.navigator.push({
      name: 'Beacons',
      passProps: {
        nearbyBeacons: beacons
      }
    })
  }
});

module.exports = HomePage;
