//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import Routes from './Routes';
import Mysidebar from './app/components/Mysidebar';
import Constants from 'expo-constants';
import Myfooter from './app/components/Myfooter';
import Login from './app/components/Login';
import News from './app/components/News';
import Home from './app/components/Home';
import { Ionicons } from '@expo/vector-icons';


class App extends Component {

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() { 
    this.drawer._root.open() 
  }
  
  render() {
    
    return (
    
    <Container style={styles.container1}>
    <Routes />
    <Myfooter />

    </Container>
   
  
      
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  icon:{
    
  },
  title:{
    fontStyle: 'normal',
    fontSize: 16,
  },
  container1:{
    
   
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer:{
    backgroundColor: '#0984e3',
  },
  login:{
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  text:{
    color:"#fff",
  }  
});

//make this component available to the app
export default App;