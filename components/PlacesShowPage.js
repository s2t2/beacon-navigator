import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon} from 'native-base';

import {styles} from "../lib/styles";

const PlacesShowPage = React.createClass({
  componentWillMount: function(){  console.log("PLACES SHOW WILL MOUNT")  },
  componentDidMount: function(){  console.log("PLACES SHOW DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("PLACES SHOW WILL RECEIVE PROPS", nextProps)  },
  //componentWillUpdate: function(nextProps, nextState){  console.log("PLACES SHOW WILL RECEIVE PROPS", nextProps, nextState)  },
  //componentDidUpdate: function(prevProps, prevState){  console.log("PLACES SHOW DID UPDATE", prevProps, prevState)  },
  componentWillUnmount: function(){  console.log("PLACES SHOW WILL UNMOUNT")  },

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
      name: 'Places',
      type:"Back",
      passProps:{
        nearbyBeacons:[]
      }
    })
  }
});

module.exports = PlacesShowPage;
