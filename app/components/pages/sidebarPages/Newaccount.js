import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {Header, Left, Icon, Body, Title, Button, Card, CardItem, CardSwiper} from 'native-base';
import {Action, Actions} from 'react-native-router-flux';

export default class Newaccount extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Header style={styles.myHeader}>
                    <Left>
                        <Button transparent onPress={Actions.login}>
                        <Icon 
                            name='arrow-back'
                            style={styles.icon}
                        />
                        </Button>
                       
                    </Left>
                    <Body>
                        <Title style={styles.textHeader}>Registration</Title>
                    </Body>
                </Header>

                <Card style={styles.myCard}>
            <CardItem header style={styles.headerContainer}>
            <Icon
                    type="FontAwesome"
                    name="exclamation-triangle"
                    style={styles.icon2}
                />
              <Text style={styles.title}>INFORMATION</Text>
             
            </CardItem>
            <CardItem>
              <Body style={{}}>
                <Text style={styles.bodyText}>
                Hello, to register you must go to our general service center road to be able to register with all your documents, if you have a vehicle or a motorcycle please go to the
                </Text>
                 <TouchableOpacity onPress={Actions.documentation}><Text style={[styles.bodyText, styles.link]}>Documentations</Text></TouchableOpacity>
                 <Text style={styles.bodyText}> 
                page for more information on documents you will need to always stay in order with the requirements, we thank you!
                 </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text></Text>
            </CardItem>
         </Card>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textHeader:{
        color: '#fff'
    },

    myHeader:{
        backgroundColor: '#0984e3'
    },
    icon:{
        color: '#fff',
    },
    icon2:{
        color: '#0984e3',
        
    },
    title:{
        color:'#0984e3',
        fontSize: 20,
    },
    headerContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyText:{
        color:'#0984e3',
        fontSize: 18,
        fontStyle: 'italic',
    },
    link:{
        textDecorationLine: 'underline',
    }
    
});