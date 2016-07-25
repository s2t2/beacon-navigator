import React from 'react';
import {AppRegistry, Text, Alert} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, List, ListItem } from 'native-base';
import Beacons from 'react-native-beacons-android';

import {styles} from "./lib/styles";

const BeaconNavigator = React.createClass({

  //getInitialState: function(){
  //  return {
  //    nearbyBeacons:[
  //      {uuid:"A", name:"Beacon Un"},
  //      {uuid:"B", name:"Beacon Du"},
  //      {uuid:"C", name:"Beacon Trios"},
  //    ]
  //  }
  //},

  //componentWillMount: function(){
  //  Beacons.detectIBeacons();
  //  Beacons.startRangingBeaconsInRegion('REGION1')
  //    .then(function(){  console.log("Beacon Ranging OK")  })
  //    .catch(function(error){  console.log("Beacon Ranging ERR", err)  })
  //},

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text style={styles.title}>Beacon Navigator</Text>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Tap the button to detect nearby points of interest based on proximity to Bluetooth beacons.</Text>

          <List>
            <ListItem itemDivider>
              <Text>Goalkeeper</Text>
            </ListItem>

            <ListItem >
              <Text>Simon Mignolet</Text>
            </ListItem>

            <ListItem itemDivider>
              <Text>Defenders</Text>
            </ListItem>

            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>

            <ListItem itemDivider>
              <Text>Dejan Lovren</Text>
            </ListItem>
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

  alertTitle: "Alert Title",
  alertMessage: "This is an Alert Message",
  triggerAlert: function(){
    return Alert.alert(this.alertTitle, this.alertMessage)
  }
});

AppRegistry.registerComponent('BeaconNavigator', function(){
  return BeaconNavigator;
});
