import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon, Title} from 'native-base';

import {styles} from "../lib/styles";

const SettingsPage = React.createClass({
  componentWillMount: function(){  console.log("MENU WILL MOUNT")  },
  componentDidMount: function(){  console.log("MENU DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("MENU WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("MENU WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("MENU DID UPDATE")  },
  componentWillUnmount: function(){  console.log("MENU WILL UNMOUNT")  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.handleSettingsButtonPress}>
            <Icon name="ios-menu" style={styles.settingsIcon}/>
          </Button>
          <Title style={styles.title}>{ /* Beacon Navigator */ }</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Select a mode.</Text>
        </Content>
      </Container>
    );
  },

  handleSettingsButtonPress: function(){
    console.log("PRESSED SETTINGS BUTTON AGAIN")
    this.goBack()
  },

  goBack: function(){
    this.props.navigator.push({
      name:"Home",
      type:"Menu"
    })
  }
});

module.exports = SettingsPage;
