import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon, Title, List, ListItem, Radio} from 'native-base';

import {styles} from "../lib/styles";

const SettingsPage = React.createClass({
  getInitialState: function(){
    return {
      modes:[
        {name:"Detection Mode", id: "detection-mode", selected: true},
        {name:"Walking Tour Mode", id: "walking-tour-mode", selected: false}
      ]
    }
  },
  componentWillMount: function(){  console.log("MENU WILL MOUNT")  },
  componentDidMount: function(){  console.log("MENU DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("MENU WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("MENU WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("MENU DID UPDATE")  },
  componentWillUnmount: function(){  console.log("MENU WILL UNMOUNT")  },

  render: function(){
    var component = this;

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
            {
              this.state.modes.map(function(mode){
                return (
                  <ListItem key={mode.id} onPress={function(){  component.handleRadioSelect(mode)  } /* need this wrapper function to prevent inner function from being executed on render */}>
                    <Radio selected={mode.selected} />
                    <Text>{mode.name}</Text>
                  </ListItem>
                )
              })
            }
          </List>
        </Content>
      </Container>
    );
  },

  handleSettingsButtonPress: function(){
    console.log("PRESSED SETTINGS BUTTON AGAIN")
    this.goBack()
  },

  handleRadioSelect: function(selectedMode){
    console.log("SELECTED MODE: "+ selectedMode.id)
    var modes = this.state.modes;
    modes.map(function(mode){
      if (mode.id == selectedMode.id) {
        mode.selected = true;
      } else {
        mode.selected = false;
      }
      return mode;
    })
    console.log(modes)
    this.setState({modes: modes});
  },

  goBack: function(){
    this.props.navigator.push({
      name:"Home",
      type:"Menu"
    })
  }
});

module.exports = SettingsPage;
