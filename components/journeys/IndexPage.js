import React from 'react';
import {Text, Image} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Title, Card, CardItem, Thumbnail, List, ListItem} from 'native-base';

import {journeys} from "../../lib/journeys_helper";
import {styles} from "../../lib/styles";

var images = {
  business:{
    authorImage: require('../../images/business/kat.jpg'),
    coverImage: require('../../images/business/farago.jpg')
  },
  local:{
    authorImage: require('../../images/local/rose.jpg'),
    coverImage: require('../../images/local/chalet.jpg')
  }
};

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

          {
            journeys.map(function(journey){
              return (
               <Card key={journey.name} style={{marginTop:15}}>
                 <CardItem >
                   <Thumbnail source={images[journey.name]["authorImage"]} />
                   <Text onPress={function(){  component.handleCardPress("local")  } /* need this wrapper function to prevent inner function from being executed on render */}>
                     {journey.title}
                   </Text>
                   <Text note>{journey.publishedOn}</Text>
                 </CardItem>
                 <CardItem cardBody>
                   <Image style={{ resizeMode: 'cover' }} source={images[journey.name]["coverImage"]} />
                   <Button transparent textStyle={{color: '#87838B'}}>{journey.starsCount.toString() + " Stars"}</Button>
                 </CardItem>
               </Card>
              )
            })
          }






        </Content>
      </Container>
    );
  },

  handleSettingsButtonPress: function(){
    this.goSettings()
  },

  goSettings: function(){
    this.props.navigator.push({
      name: 'Settings'
    });
  },

  handleCardPress: function(journeyName){
    this.goJourney(journeyName);
  },

  goJourney: function(journeyName){
    this.props.navigator.push({
      name: "Journey",
      passProps:{
        journeyName: journeyName
      }
    })
  }
});

module.exports = JourneysIndexPage;
