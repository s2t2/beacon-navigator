import React from 'react';
import {Text, Alert, DeviceEventEmitter} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Spinner} from 'native-base';
import Beacons from 'react-native-beacons-android';

import {styles} from "../lib/styles";
import {beaconsDidRangeResult} from "../lib/beacons_did_range_example_result";
import {beaconId, lookupBeaconDetails, logBeacons, logBeaconsToCSV, logKnownBeacons, logKnownBeaconsToCSV} from "../lib/beacons_helper";

const HomePage = React.createClass({
  getInitialState: function(){
    return {displaySpinner:false, detectionResults:[]};
  },

  componentWillMount: function(){
    console.log("HOME WILL MOUNT");
    Beacons.detectIBeacons();
    Beacons.startRangingBeaconsInRegion('REGION1')
      .then(function(){  console.log("Beacon Ranging OK")  })
      .catch(function(error){  console.log("Beacon Ranging ERR", err)  })
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
    this.beaconsDidRange = null;
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
      var beacons = lookupBeaconDetails(results);
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
    logKnownBeaconsToCSV(data.beacons);
    //this.setState({beaconDetectionResults: data.beacons});
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
