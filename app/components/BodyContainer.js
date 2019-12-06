import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import {Text, ScrollView, StyleSheet} from 'react-native';
export default class BodyContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (  
      <Container style={styles.container}>
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#0984e3' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button style={{ backgroundColor: '#DD5144' }} onPress={()=> console.log('clicked')}>
              <Icon name="mail" />
            </Button>
          </Fab>
          
        </View>
       
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
  }
});