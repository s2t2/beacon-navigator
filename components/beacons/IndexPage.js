import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon, List, ListItem} from 'native-base';

import {styles} from "../../lib/styles";
import {beaconId} from "../../lib/beacons_helper";

const IndexPage = React.createClass({
  componentWillMount: function(){  console.log("INDEX WILL MOUNT")  },
  componentDidMount: function(){  console.log("INDEX DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("INDEX WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("INDEX WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("INDEX DID UPDATE")  },
  componentWillUnmount: function(){  console.log("INDEX WILL UNMOUNT")  },

  render: function(){
    var beacons = this.props.nearbyBeacons;
    var component = this;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.goBack}>
            <Icon name="md-arrow-back" style={styles.backIcon}/>
          </Button>
          <Text style={styles.title}>Nearby Beacons ({beacons.length})</Text>
        </Header>

        <Content style={styles.content}>
          <List>
            {
              beacons.map(function(beacon){
                return (
                  <ListItem key={beaconId(beacon)} itemDivider={component.isEvenNumber(beacons.indexOf(beacon))}>
                    <Button transparent onPress={function(){  component.goShow(beacon, beacons)  } /* need this wrapper function to prevent inner function from being executed on render */}>
                      <Text>{beacon.details.displayName}</Text>
                    </Button>
                  </ListItem>
                );
              })
            }
          </List>
        </Content>
      </Container>
    );
  },

  //
  // DISPLAY FORMATTING FUNCTIONS
  //

  isEvenNumber: function(listItemIndex){
    //console.log("INDEX", listItemIndex, "SHOULD BE DIVIDED?", (listItemIndex % 2) == 0)
    return (listItemIndex % 2) == 0
  },

  //
  // NAVIGATION FUNCTIONS
  //

  goBack: function(){
    this.props.navigator.push({
      name: 'Home',
      type: "Back"
    })
  },

  goShow: function(beacon, beacons){
    this.props.navigator.push({
      name: 'Beacon',
      passProps:{
        indexBeacons: beacons, // need to pass this to the show page so the show page can pass them back to the index page
        showBeacon: beacon,
      }
    })
  }
});

module.exports = IndexPage;
