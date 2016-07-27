import React from 'react';
import {Text} from 'react-native';
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
      //component.setState({
      //  displaySpinner: false,
      //  nearbyBeacons: beaconsDidRangeResult
      //})
      component.props.navigator.push({
        name: 'Places',
        passProps: {
          nearbyBeacons: beaconsDidRangeResult
        }
      })
    }, 1000);
  }

});

module.exports = HomePage;
