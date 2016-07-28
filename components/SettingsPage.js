import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon, Title, List, ListItem, Radio} from 'native-base';

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
            <Icon name="ios-home" style={styles.headerIcon}/>
          </Button>
          <Title></Title>
        </Header>

        <Content style={styles.content}>
          <List>
            <ListItem key="list-header" itemDivider style={styles.listHeader}>
              <Text style={styles.listHeaderTitle}>Please choose a presentation mode ...</Text>
            </ListItem>
            <ListItem key="detection-mode">
              <Radio selected={true} />
              <Text>Detection Mode</Text>
            </ListItem>
            <ListItem key="walking-tour-mode">
              <Radio selected={false} />
              <Text>Walking Tour Mode</Text>
            </ListItem>
          </List>
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
