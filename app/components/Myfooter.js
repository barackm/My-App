import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Myfooter extends Component {
    render() {
        return (
            
            
            <Footer style={styles.footerContainer}>
              <FooterTab style={styles.footerContainer}>
                <Button transparent onPress={Actions.home}>
                    <Icon 
                        name="home"
                        style={styles.icon}
                    />
                  <Text style={styles.text}>Home</Text>
                </Button>
                <Button transparent onPress={Actions.discussions}>
                    <Icon 
                        name="chatboxes"
                        style={styles.icon}
                    />
                  <Text style={styles.text}>Discussions</Text>
                </Button>
                <Button transparent onPress={Actions.news}>
                    <Icon
                         
                        name="paper"
                        style={styles.icon}
                    />
                  <Text style={styles.text}>News</Text>
                </Button>
                <Button transparent onPress={Actions.camera1}>
                    <Icon 
                        name="camera"
                        style={styles.icon}
                    />
                  <Text style={styles.text}>Camera</Text>
                </Button>
              </FooterTab>
            </Footer>
         
            
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        color: '#fff',

    },
    footerContainer: {
        backgroundColor: '#0984e3',
    },
    text:{
        color: "#fff",
        fontSize: 12,

    }
});