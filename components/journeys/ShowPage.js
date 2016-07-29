import React from 'react';
import {Text, Image} from 'react-native';
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
  componentWillMount: function(){  console.log("JOURNEY WILL MOUNT")  },
  componentDidMount: function(){  console.log("JOURNEY DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("JOURNEY WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("JOURNEY WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("JOURNEY DID UPDATE")  },
  componentWillUnmount: function(){  console.log("JOURNEY WILL UNMOUNT")  },

  render: function(){
    var component = this;
    var journey = this.props.journey;
    var stopIndex = this.props.stopIndex;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={component.goBack}>
            <Icon name="md-arrow-back" style={styles.headerIcon}/>
          </Button>
          <Text style={styles.title}>{ /* Journey */ }</Text>
        </Header>

        <Content style={styles.content}>
          <Card>
            <CardItem header>
              <Thumbnail source={images[journey.name]["authorImage"]} />
              <Text>{journey.title} ({journey.stops.length} Stops)</Text>
            </CardItem>
            <CardItem>
              <Text>{journey.text}</Text>
            </CardItem>
            <CardItem header>
              <Text>Next Stop: {journey.stops[stopIndex].title}</Text>
            </CardItem>
            <CardItem cardBody>
              <Text style={{marginBottom:10}}>{journey.next}</Text>
              <Image style={{ resizeMode: 'cover' }} source={images[journey.name]["stopImages"][stopIndex]} />
            </CardItem>
          </Card>




        </Content>
      </Container>
    );
  },

  goBack: function(){
    this.props.navigator.push({
      name: "Journeys",
      type: "Back"
    })
  }
});

module.exports = JourneysShowPage;
