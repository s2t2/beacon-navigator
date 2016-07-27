import React from 'react';
import {Text, Alert} from 'react-native';
import {Container, Header, Footer, Content, Button, Icon, Spinner} from 'native-base';

import {styles} from "../lib/styles";
import {beaconsDidRangeResult} from "../lib/beacons_did_range_example_result";

const HomePage = React.createClass({
  getInitialState: function(){  return {displaySpinner:false}  },
  componentWillMount: function(){  console.log("HOME WILL MOUNT")  },
  componentDidMount: function(){  console.log("HOME DID MOUNT")  },
  componentWillReceiveProps: function(nextProps){  console.log("HOME WILL RECEIVE PROPS")  },
  componentWillUpdate: function(nextProps, nextState){  console.log("HOME WILL UPDATE")  },
  componentDidUpdate: function(prevProps, prevState){  console.log("HOME DID UPDATE")  },
  componentWillUnmount: function(){  console.log("HOME WILL UNMOUNT")  },

  render: function(){
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Text style={styles.title}>Beacon Navigator</Text>
        </Header>

        <Content style={styles.content}>
          <Text style={styles.text}>Tap the button to detect nearby points of interest based on proximity to Bluetooth beacons.</Text>
          {this.state.displaySpinner ? <Spinner color="#428bca" size="large"/> : null}
        </Content>

        <Footer style={styles.footer}>
          <Button style={styles.button} onPress={this.handleButtonPress}>
            <Icon name="ios-radio-outline" />
          </Button>
        </Footer>
      </Container>
    );
  },

  handleButtonPress: function(){
    this.setState({displaySpinner: true})
    var component = this;
    setTimeout(function(){
      var result = beaconsDidRangeResult;
      var beacons = []; //result; // todo: look-up contextual information
      if (beacons.length > 0) {
        console.log("DETECTED SOME BEACONS");
        component.goIndex(beacons);
      } else {
        console.log("DETECTED ZERO BEACONS");
        component.setState({displaySpinner: false});
        return Alert.alert("No Beacons Nearby", "Hey, it looks like there aren't any Bluetooth beacons around you right now. Why don't you try again after moving to a different location?");
      };
    }, 1000);
  },

  //
  // NAVIGATION
  //

  goIndex(beaconsDidRangeResult){
    this.props.navigator.push({
      name: 'Beacons',
      passProps: {
        nearbyBeacons: beaconsDidRangeResult
      }
    })
  }
});

module.exports = HomePage;
