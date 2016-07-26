import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon, List, ListItem} from 'native-base';

import {styles} from "../lib/styles";

const BeaconsIndexPage = React.createClass({
  componentWillMount: function(){  console.log("BEACONS INDEX WILL MOUNT")  },
  componentDidMount: function(){  console.log("BEACONS INDEX DID MOUNT")  },
  componentWillUnmount: function(){  console.log("BEACONS INDEX WILL UNMOUNT")  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.goBack}>
            <Icon name="md-arrow-back" style={styles.backIcon}/>
          </Button>

          <Text style={styles.title}>Nearby Places of Interest ({this.props.nearbyBeacons.length})</Text>
        </Header>

        <Content>
          <Text>todo: list</Text>
        </Content>
      </Container>
    );
  },

  goBack: function(){
    this.props.navigator.push({name: 'Home', type:"Back"})
  }
});

module.exports = BeaconsIndexPage;
