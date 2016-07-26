import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, List, ListItem} from 'native-base';

import {styles} from "../lib/styles";

const BeaconsIndexPage = React.createClass({
  componentWillMount: function(){  console.log("BEACONS INDEX WILL MOUNT")  },

  componentDidMount: function(){  console.log("BEACONS INDEX DID MOUNT")  },

  componentWillUnmount: function(){  console.log("BEACONS INDEX WILL UNMOUNT")  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent>
            <Icon name="ios-arrow-round-back" />
          </Button>
          <Text style={styles.title}>Nearby Places of Interest</Text>
        </Header>
      </Container>
    );
  }

});

module.exports = BeaconsIndexPage;
