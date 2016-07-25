import React from 'react';
import {AppRegistry, Text, Alert} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, List, ListItem } from 'native-base';
import Beacons from 'react-native-beacons-android';

import {styles} from "./lib/styles";

const BeaconNavigator = React.createClass({

  getInitialState: function(){
    console.log("GETTING INITIAL STATE")
    return {
      nearbyBeacons:[
        {uuid:"A", name:"Beacon Un"},
        {uuid:"B", name:"Beacon Deux"},
        {uuid:"C", name:"Beacon Trios"},
      ]
    }
  },

  //componentWillMount: function(){
  //  Beacons.detectIBeacons();
  //  Beacons.startRangingBeaconsInRegion('REGION1')
  //    .then(function(){  console.log("Beacon Ranging OK")  })
  //    .catch(function(error){  console.log("Beacon Ranging ERR", err)  })
  //},

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
                  <ListItem key={beacon.uuid} itemDivider={component.isEvenNumber(beacons.indexOf(beacon))}>
                    <Text>{beacon.name}</Text>
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
    console.log("INDEX", listItemIndex, "SHOULD BE DEVIDED?", (listItemIndex % 2) == 0)
    return (listItemIndex % 2) == 0
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
