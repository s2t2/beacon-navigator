import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Title} from 'native-base';

import {styles} from "../../lib/styles";

const JourneysIndexPage = React.createClass({
  componentWillMount: function(){  console.log("JOURNEYS WILL MOUNT");  },
  componentDidMount: function(){  console.log("JOURNEYS DID MOUNT");  },
  componentWillReceiveProps: function(nextProps){  console.log("JOURNEYS WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("JOURNEYS WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("JOURNEYS DID UPDATE")  },
  componentWillUnmount: function(){  console.log("JOURNEYS WILL UNMOUNT");  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.handleSettingsButtonPress}>
            <Icon name="ios-menu" style={styles.headerIcon}/>
          </Button>
          <Title style={styles.title}>{ /* JOURNEYS */ }</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Please select a Parisian Journey ...</Text>
        </Content>
      </Container>
    );
  },

  handleSettingsButtonPress: function(){
    this.goSettings()
  },

  goSettings: function(){
    this.props.navigator.resetTo({
      name: 'Settings'
    });
  }
});

module.exports = JourneysIndexPage;
