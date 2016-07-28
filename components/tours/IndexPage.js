import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Title} from 'native-base';

import {styles} from "../../lib/styles";

const ToursIndexPage = React.createClass({
  componentWillMount: function(){  console.log("TOURS WILL MOUNT");  },
  componentDidMount: function(){  console.log("TOURS DID MOUNT");  },
  componentWillReceiveProps: function(nextProps){  console.log("TOURS WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("TOURS WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("TOURS DID UPDATE")  },
  componentWillUnmount: function(){  console.log("TOURS WILL UNMOUNT");  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.handleSettingsButtonPress}>
            <Icon name="ios-menu" style={styles.headerIcon}/>
          </Button>
          <Title style={styles.title}>{ /* Tours */ }</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Please select a Parisian City Tour ...</Text>
        </Content>
      </Container>
    );
  },

  goSettings: function(){
    this.props.navigator.resetTo({
      name: 'Settings'
    });
  }
});

module.exports = ToursIndexPage;
