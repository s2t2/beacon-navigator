import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon} from 'native-base';

import {styles} from "../lib/styles";

const BeaconsIndexPage = React.createClass({
  componentWillMount: function(){  console.log("BEACONS SHOW WILL MOUNT")  },
  componentDidMount: function(){  console.log("BEACONS SHOW DID MOUNT")  },
  componentWillUnmount: function(){  console.log("BEACONS SHOW WILL UNMOUNT")  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.goBack}>
            <Icon name="md-arrow-back" style={styles.backIcon}/>
          </Button>
          <Text style={styles.title}>Place Name</Text>
        </Header>

        <Content>
          <Text>Place information here</Text>
        </Content>
      </Container>
    );
  },

  goBack: function(){
    this.props.navigator.push({
      name: 'Beacons',
      type:"Back",
      passProps:{
        nearbyBeacons:[]
      }
    })
  }
});

module.exports = BeaconsIndexPage;
