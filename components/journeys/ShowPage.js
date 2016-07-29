import React from 'react';
import {Text, Image, Alert} from 'react-native';
import {Container, Header, Content, Button, Icon, Card, CardItem, Thumbnail} from 'native-base';

import {styles} from "../../lib/styles";

var images = {
  business:{
    authorImage: require('../../images/business/kat.jpg'),
    stopImages:[
      require('../../images/business/farago.jpg'),
      require('../../images/business/portesd.jpg'),
      require('../../images/business/theatre.jpg')
    ]
  },
  local:{
    authorImage: require('../../images/local/rose.jpg'),
    stopImages:[
      require('../../images/local/laroche.png'),
      require('../../images/local/desnoyer.jpg'),
      require('../../images/local/chalet.jpg')
    ]
  }
};

const JourneysShowPage = React.createClass({
  componentWillMount: function(){
    console.log("JOURNEY WILL MOUNT")
    var component = this;
    setTimeout(function(){
      var alertTitle = "Way to go!";
      var alertMessage = "You found the " + component.nextStopPrefix(component.props.journey, component.nextStopIndex(component.props.stopIndex)) + " stop."
      return Alert.alert(alertTitle, alertMessage, [
          //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {
            text: 'OK',
            onPress: function(){
              if (component.nextStopExists(component.props.journey, component.props.stopIndex)) {
                component.goForward(component.props.journey, component.nextStopIndex(component.props.stopIndex))
              } else {
                component.goJourneys();
              };
            }
          }
        ]
      );
    }, 7000);



  },
  componentDidMount: function(){  console.log("JOURNEY DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("JOURNEY WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("JOURNEY WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("JOURNEY DID UPDATE")  },
  componentWillUnmount: function(){  console.log("JOURNEY WILL UNMOUNT")  },

  render: function(){
    var component = this;

    var journey = this.props.journey;
    var stopIndex = this.props.stopIndex;

    var journeyDescriptionCardItem = (
      <CardItem>
        <Text>{journey.text}</Text>
      </CardItem>
    );
    var journeySubtitle = "(" + journey.stops.length + " Stops)";

    var nextStopIndex = this.nextStopIndex(stopIndex);
    var directionsToNextStop = this.directionsToNextStop(journey, stopIndex);
    var nextStopSubtitle = "(" + (nextStopIndex + 1) + " of " + journey.stops.length + ")";
    var nextStopImageSource = images[journey.name]["stopImages"][nextStopIndex];
    var forwardButton = (
      <Button transparent onPress={function(){  return component.goForward(journey, nextStopIndex)  }}>
        <Icon name="md-arrow-forward" style={styles.headerIcon}/>
      </Button>
    );
    var conditionallyDisplayedForwardButton = (component.nextStopExists(journey, stopIndex) ? forwardButton : null);
    var conditionallyDisplayedForwardButton = null; // hide the button for now.

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={component.goBack}>
            <Icon name="md-arrow-back" style={styles.headerIcon}/>
          </Button>
          <Text style={styles.title}>{ /* Journey */ }</Text>
          {conditionallyDisplayedForwardButton}
        </Header>

        <Content style={styles.content}>
          <Card>
            <CardItem header>
              <Thumbnail source={images[journey.name]["authorImage"]} />
              <Text>{journey.title} {journeySubtitle}</Text>
            </CardItem>
            { journeyDescriptionCardItem }
            <CardItem header>
              <Text>Next Stop: {journey.stops[nextStopIndex].title} {nextStopSubtitle}</Text>
            </CardItem>
            <CardItem cardBody>
              <Text style={{marginBottom:10}}>{directionsToNextStop}</Text>
              <Image style={{ resizeMode: 'cover' }} source={nextStopImageSource} />
            </CardItem>
            <CardItem>
              <Text>When you get close to your destination, you will receive a notification.</Text>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  },

  nextStopIndex: function(stopIndex){
    if (stopIndex == null){
      return 0;
    } else {
      return stopIndex + 1;
    };
  },

  nextStopExists: function(journey, stopIndex){
    return this.nextStopIndex(stopIndex) < (journey.stops.length - 1)
  },

  nextStopPrefix: function(journey, nextStopIndex){
    console.log("PREFIXING", journey.stops.length, nextStopIndex)
    if (nextStopIndex == 0){
      return "first";
    } else if (nextStopIndex == journey.stops.length - 1){
      return "last";
    } else {
      return "next";
    };
  },

  directionsToNextStop: function(journey, stopIndex){
    if (stopIndex == null){
      return journey.next;
    } else {
      return directionsToNextStop = journey.stops[stopIndex].next;
    };
  },

  goJourneys: function(){
    this.props.navigator.resetTo({name: "Journeys"})
  },

  goBack: function(){
    this.props.navigator.pop();
  },

  goForward: function(journey, nextStopIndex){
    this.props.navigator.push({
      name: "Journey",
      passProps:{
        journey: journey,
        stopIndex: nextStopIndex
      }
    })
  }
});

module.exports = JourneysShowPage;
