import React from 'react';
import {Text, Image} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Title, Card, CardItem, Thumbnail, List, ListItem} from 'native-base';

import {styles} from "../../lib/styles";

const JourneysIndexPage = React.createClass({
  componentWillMount: function(){  console.log("JOURNEYS WILL MOUNT");  },
  componentDidMount: function(){  console.log("JOURNEYS DID MOUNT");  },
  componentWillReceiveProps: function(nextProps){  console.log("JOURNEYS WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("JOURNEYS WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("JOURNEYS DID UPDATE")  },
  componentWillUnmount: function(){  console.log("JOURNEYS WILL UNMOUNT");  },

  render: function(){
    var component = this;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={this.handleSettingsButtonPress}>
            <Icon name="ios-menu" style={styles.headerIcon}/>
          </Button>
          <Title style={styles.title}>{ /* Journeys */ }</Title>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.pageHeading}>Please select a Parisian Journey ...</Text>

          <Card>
            <CardItem >
              <Thumbnail source={require('../../images/business/kat.jpg')} />
              <Text onPress={function(){  component.handleCardPress("business")  } /* need this wrapper function to prevent inner function from being executed on render */}>
                Kat's Office Adventure
              </Text>
              <Text note>July 27, 2016</Text>
            </CardItem>
            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover' }} source={require('../../images/business/farago.jpg')} />
              <Button transparent textStyle={{color: '#87838B'}}>389 Stars</Button>
            </CardItem>
          </Card>

          <Card style={{marginTop:15}}>
            <CardItem >
              <Thumbnail source={require('../../images/local/rose.jpg')} />
              <Text onPress={function(){  component.handleCardPress("local")  } /* need this wrapper function to prevent inner function from being executed on render */}>
                Rose's Local Secrets
              </Text>
              <Text note>July 21, 2016</Text>
            </CardItem>
            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover' }} source={require('../../images/local/chalet.jpg')} />
              <Button transparent textStyle={{color: '#87838B'}}>167 Stars</Button>
            </CardItem>
          </Card>


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
  },

  handleCardPress: function(journeyName){
    console.log("PRESSED A CARD", journeyName)
  },
});

module.exports = JourneysIndexPage;
