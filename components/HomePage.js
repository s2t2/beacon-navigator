import React from 'react';
import {Text, Alert, DeviceEventEmitter} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Spinner, Title} from 'native-base';
import Beacons from 'react-native-beacons-android';

import {beaconId, mergeBeaconDetails, logBeacons, logBeaconsToCSV, logKnownBeacons, logKnownBeaconsToCSV, synthesizeDetections, mergeBeaconDetailsWithSynthesizedResults} from "../lib/beacons_helper";
import {mockBluetooth, mockSynthesizedAndMergedBeacons} from "../lib/dev_helper"
import {styles} from "../lib/styles";

const HomePage = React.createClass({
  getInitialState: function(){
    return {displaySpinner:false, collectDetectionResults: false, detectionAttemptsCount:0, detections:[]};
  },

  componentWillMount: function(){
    console.log("HOME WILL MOUNT");
    if (!mockBluetooth) {
      Beacons.detectIBeacons();
      Beacons.startRangingBeaconsInRegion('REGION1')
        .then(function(){  console.log("Beacon Ranging OK")  })
        .catch(function(error){  console.log("Beacon Ranging ERR", error)  });
    };
  },

  componentDidMount: function(){
    console.log("HOME DID MOUNT");
    if (!mockBluetooth) {
      this.beaconsDidRange = DeviceEventEmitter.addListener("beaconsDidRange", this.emitBeaconData);
    };
  },

  componentWillReceiveProps: function(nextProps){  console.log("HOME WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("HOME WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("HOME DID UPDATE")  },

  componentWillUnmount: function(){
    console.log("HOME WILL UNMOUNT");
    if (!mockBluetooth) {
      this.stopDetectingBeacons();
    };
  }, // when navigating, must use either navigator.replace or navigator.resetTo beacause these trigger trigger the ComponentWillUnmount lifecycle event, unlike navigator.push, which does not.

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.handleSettingsButtonPress}>
            <Icon name="ios-menu" style={styles.settingsIcon}/>
          </Button>
          <Title style={styles.title}>{ /* Beacon Navigator */ }</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Tap the button below to detect nearby points of interest based on proximity to Bluetooth beacons.</Text>
          {this.state.displaySpinner ? <Spinner color="#428bca" size="large"/> : null}
        </Content>

        <Footer style={styles.footer}>
          <Button style={styles.button} onPress={this.handleDetectionButtonPress}>
            <Icon name="ios-radio-outline" />
          </Button>
        </Footer>
      </Container>
    );
  },

  handleSettingsButtonPress: function(){
    this.goSettings()
  },

  handleDetectionButtonPress: function(){
    this.setState({displaySpinner: true, collectDetectionResults: true});
    if (mockBluetooth) {
      var component = this;
      setTimeout(function(){
        component.navigateOrAlert(mockSynthesizedAndMergedBeacons);
      }, 2000);
    };
  },

  // This function controls what happens with the results of beacon-detection efforts.
  // @param [Object] data A complete beaconsDidRangeResult, the output of beaconsDidRange. See data/mocks/beacons-did-range/ for examples.
  emitBeaconData: function(data){
    //console.log(data.beacons);
    //logBeacons(data.beacons);
    //logBeaconsToCSV(data.beacons);
    //logKnownBeacons(data.beacons);
    //logKnownBeaconsToCSV(data.beacons);

    if(this.state.collectDetectionResults == true){
      console.log("---------------------")
      console.log("BEACON DETECTION ATTEMPT #" + this.state.detectionAttemptsCount);
      if (this.state.detectionAttemptsCount < 10) {
        this.setState({
          detectionAttemptsCount: this.state.detectionAttemptsCount + 1,
          detections: this.state.detections.concat(data.beacons)
        });
      } else {
        var synthesizedResults = synthesizeDetections(this.state.detections);
        var synthesizedAndMergedBeacons = mergeBeaconDetailsWithSynthesizedResults(synthesizedResults);
        this.navigateOrAlert(synthesizedAndMergedBeacons);
      };
    }
  },

  stopDetectingBeacons: function(){
    if (!mockBluetooth) {
      Beacons.stopRangingBeaconsInRegion('REGION1')
        .then(function(){  console.log("Beacon Ranging Stopped OK")  })
        .catch(function(error){  console.log("Beacon Ranging Stopped With ERR", error)  });
      this.beaconsDidRange = null;
    };
  },

  // @param [Array] synthesizedAndMergedBeacons The result of merging beacon details with synthesized detection results. See data/mocks/synthesized-and-merged-beacons/ for examples.
  navigateOrAlert: function(synthesizedAndMergedBeacons){
    this.setState({detectionAttemptsCount:0, detections:[], displaySpinner:false, collectDetectionResults: false})
    if (synthesizedAndMergedBeacons.length > 0) {
      this.goIndex(synthesizedAndMergedBeacons);
    } else {
      return Alert.alert("No Beacons Nearby", "Hey, it looks like there aren't any Bluetooth beacons around you right now. Please move to a different location and try again.");
    };
  },

  // @param [Array] synthesizedAndMergedBeacons The result of merging beacon details with synthesized detection results. See data/mocks/synthesized-and-merged-beacons/ for examples.
  goIndex: function(synthesizedAndMergedBeacons){
    this.props.navigator.resetTo({
      name: 'Beacons',
      passProps: {
        nearbyBeacons: synthesizedAndMergedBeacons
      }
    });
  },

  goSettings: function(){
    this.props.navigator.resetTo({
      name: 'Settings'
    });
  }
});

module.exports = HomePage;
