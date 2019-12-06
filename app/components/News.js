//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Header, Left, Body, Right, Icon, Title, Button, Tab, Tabs, Container} from 'native-base';
import {Actions } from 'react-native-router-flux';
// create a component
class News extends Component {
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
                        News
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
//make this component available to the app
export default News;
