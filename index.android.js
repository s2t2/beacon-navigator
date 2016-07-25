import React from 'react';
import {AppRegistry, Text, Alert} from 'react-native';
import {Container, Header, Footer, Title, Content, Button, Icon } from 'native-base';
import { DeviceEventEmitter } from 'react-native'
import Beacons from 'react-native-beacons-android'



import {styles} from "./lib/styles";

const BeaconNavigator = React.createClass({
  alertTitle: "Alert Title",
  alertMessage: "This is an Alert Message",

  triggerAlert: function(){
    return Alert.alert(this.alertTitle, this.alertMessage)

  ibeaconDetect: function(){
    Beacons.detectIBeacons()

    // Start detecting all iBeacons in the nearby
    Beacons.startRangingBeaconsInRegion('REGION1', '25556b57fe6d')
      .then(() => console.log(`Beacons ranging started succesfully!`)
      .catch(error => console.log(`Beacons ranging not started, error: ${error}`)

    // Print a log of the detected iBeacons (1 per second)
    DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
      Alert.alert('Found beacons!', data.beacons)})
    }
  },

  render: function(){


    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text style={styles.title}>Beacon Navigator</Text>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Tap the button to detect nearby points of interest based on proximity to Bluetooth beacons.</Text>

        </Content>

        <Footer style={styles.footer}>
          <Button style={styles.button} onPress={this.ibeaconDetect}>
            <Icon name="ios-radio-outline" />
          </Button>
        </Footer>
      </Container>
    );
  }
});

AppRegistry.registerComponent('BeaconNavigator', function(){
  return BeaconNavigator;
});
