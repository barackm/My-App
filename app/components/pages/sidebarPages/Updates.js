import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Header, Left, Body, Right, Icon, Title, Button, Tab, Tabs, Container} from 'native-base';
import {Actions } from 'react-native-router-flux';


export default class Updates extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header style={styles.myHeader}>
                    <Left>
                        <Button transparent onPress={Actions.home}>
                            <Icon 
                                name="arrow-back"
                                style={styles.icon}
                            />
                        </Button>
                        
                    </Left>
                    <Body>
                        <Title style={styles.textHeader}>
                            Updates
                        </Title>
                    </Body>
                </Header>
            </View>
        )
    }
}
const styles= StyleSheet.create({
   container:{
       flex: 1,
   },
   myHeader:{
       backgroundColor: '#0984e3',
   },
   icon:{
       color:'#fff',
   },
   textHeader:{
       color: '#fff',
   }
});