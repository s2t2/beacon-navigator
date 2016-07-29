import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Button, Icon, Card, CardItem} from 'native-base';

import {styles} from "../../lib/styles";

const JourneysShowPage = React.createClass({
  componentWillMount: function(){  console.log("JOURNEY WILL MOUNT")  },
  componentDidMount: function(){  console.log("JOURNEY DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("JOURNEY WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("JOURNEY WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("JOURNEY DID UPDATE")  },
  componentWillUnmount: function(){  console.log("JOURNEY WILL UNMOUNT")  },

  render: function(){
    var component = this;

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={component.goBack}>
            <Icon name="md-arrow-back" style={styles.headerIcon}/>
          </Button>
          <Text style={styles.title}>People Talkin</Text>
        </Header>

        <Content style={styles.content}>
          <Card>
            <CardItem header>
              <Text>Yep</Text>
            </CardItem>
            <CardItem>
              <Text>Fun Times</Text>
            </CardItem>
            <CardItem>
              <Text>Fa Sho</Text>
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
