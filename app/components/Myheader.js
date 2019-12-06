import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import Constants from 'expo-constants';
import Mysidebar from './Mysidebar';

export default class Myheader extends Component {
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
         <Button transparent>
           <Icon

              name="search"
              style={styles.icon}
            />
            </Button>
            <Button style={styles.login} transparent onPress={()=> console.log('hellow world')}>
              <Text style={styles.text}>Login</Text>
            </Button>
         </Right>
       </Header>
     
    </View>
     
    
    </Drawer>
        )
    }
}
const styles = StyleSheet.create({
    icon:{
      
    },
    title:{
      fontStyle: 'normal',
      fontSize: 16,
    },
    container:{
      
      flex: 1,
      
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