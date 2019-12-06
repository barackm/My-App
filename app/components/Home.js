import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import Constants from 'expo-constants';
import Mysidebar from './Mysidebar';
import { Actions } from 'react-native-router-flux';
import BodyContainer from './BodyContainer';
import Mybody from './Mybody';

export default class Home extends Component {
    closeDrawer() {
        this.drawer._root.close()
      }
      openDrawer() { 
        this.drawer._root.open() 
      }
    render() {
        return (
            <Drawer 
      ref={(ref) => { this.drawer = ref; }} 
      content={<Mysidebar navigator={this.navigator} />} 
      onClose={() => this.closeDrawer()} 
      style={styles.container}
    > 
    
    <View style={styles.container}>

    <Header style={styles.headerContainer}>
         <Left>
           <Button transparent onPress={()=> this.openDrawer()} >
           <Icon 
              name="menu"
              style={styles.icon}
            />
           </Button>
         </Left>
         <Body>
            <Title style={styles.titleContainer}>
              <Text style={styles.title}>Traffic Road</Text>
            </Title>
         </Body>
         <Right>
        
            <Button style={styles.login} transparent onPress={Actions.login}>
              <Text style={styles.title}>Login</Text>
            </Button>
         </Right>
       </Header>
       
       <BodyContainer />
       
    </View>
     
    
    </Drawer>
        )
    }
}
const styles = StyleSheet.create({
    icon:{
      color: '#fff'
    },
    title:{
      fontStyle: 'normal',
      fontSize: 16,
      color: '#fff',
    },
    container:{
      
      flex: 1,
      
    },
    headerContainer:{
      backgroundColor: '#0984e3',
    },
    login:{
    
    },
    text:{
      color:"#fff",
    }  
  });