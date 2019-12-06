import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import {Header, Left, Body, Right, Icon, Title, Button, Tab, Tabs, Container, ScrollableTab} from 'native-base';
import Constants from 'expo-constants';
import {Actions} from 'react-native-router-flux';


import Tab1 from '../dashboadPages/FirstTab';
import Tab2 from '../dashboadPages/SecondTab';
import Tab3 from '../dashboadPages/FirdTab';

export default class MydashBoard extends Component {
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
                            Dashboard
                        </Title>
                    </Body>
                </Header>
                
                    <Tabs>
                        <Tab heading="Tab1">
                            <Tab1 />
                        </Tab>
                        <Tab heading="Tab2">
                            <Tab2 />
                        </Tab>
                        <Tab heading="Tab3">
                            <Tab3 />
                        </Tab>
                    </Tabs>
                           
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    myHeader:{
        backgroundColor: '#0984e3',
    },
    icon:{
        color: '#fff',
    },
    textHeader:{
        color:'#fff',
        fontStyle: 'normal',
        fontSize: 18,
    },
    tabContainer:{
        backgroundColor: '#0984e3',

    }
});