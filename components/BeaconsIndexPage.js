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
          <Text style={styles.title}>Nearby Places of Interest ({this.props.beaconCount})</Text>
        </Header>
        <Content>
          <Button transparent onPress={this.goBack}>
            <Icon name="ios-arrow-round-back" />
          </Button>
        </Content>
      </Container>
    );
  },

  goBack: function(){
    //this.props.navigator.pop()
    this.props.navigator.push({name: 'Home', type:"Back"})
  }

});

module.exports = BeaconsIndexPage;
