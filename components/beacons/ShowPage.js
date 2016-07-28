import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon, Card, CardItem} from 'native-base';

import {styles} from "../../lib/styles";
import {beaconPrettyMedianDistance} from "../../lib/beacons_helper";

const ShowPage = React.createClass({
  componentWillMount: function(){  console.log("SHOW WILL MOUNT")  },
  componentDidMount: function(){  console.log("SHOW DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("SHOW WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("SHOW WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("SHOW DID UPDATE")  },
  componentWillUnmount: function(){  console.log("SHOW WILL UNMOUNT")  },

  render: function(){
    var beacon = this.props.showBeacon;
    var beacons = this.props.indexBeacons;
    var component = this;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={function(){  component.goBack(beacons)  } /* need this wrapper function to prevent inner function from being executed on render */}>
            <Icon name="md-arrow-back" style={styles.headerIcon}/>
          </Button>
          <Text style={styles.title}>{beacon.details.displayName}</Text>
        </Header>

        <Content style={styles.content}>
          <Card>
            <CardItem header>
              <Text>{beacon.details.displayName}</Text>
            </CardItem>
            <CardItem>
              <Text>{beaconPrettyMedianDistance(beacon)}</Text>
            </CardItem>
            <CardItem>
              <Text>{beacon.details.description}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  },

  goBack: function(beacons){
    this.props.navigator.push({
      name: "Beacons",
      type: "Back",
      passProps:{
        nearbyBeacons: beacons
      }
    })
  }
});

module.exports = ShowPage;
