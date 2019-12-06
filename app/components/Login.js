import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions,Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Header, Left, Body, RIght, Title, Right, Icon, Button, Form, Item, Label, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Constants from 'expo-constants';


export default class Login extends Component {
    render() {
       
        return (
            <View style={styles.firstContainer}>
                <Header style={styles.hearderContainer}>
                    <Left>
                        <Button transparent onPress={Actions.home}>
                        <Icon 
                            name="arrow-back"
                            style={styles.icon}
                        />

                        </Button>
                       
                    </Left>
                    <Body>
                        <Title>
                            <Text style={styles.text}>Login</Text>
                        </Title>
                    </Body>
                    <Right>
                        
                    </Right>
                </Header>
                
            <KeyboardAvoidingView behavior="padding" enabled style={styles.avoidingView}>
                
                <View style={styles.logoContainer}>
                    <Icon 
                        name="user"
                        type="FontAwesome"
                        style={styles.Mylogo}
                    />
                </View>
                <View style={styles.searchSection}>
                    <View style={styles.searchIcon}><Icon
                    //raised
                    name='person'
                    style={{color: '#0984e3'}}
                    color='#0984e3'
                    /></View>
                    <TextInput
                        style={styles.input}
                        placeholder="Username or Email"
                        
                        placeholderTextColor ='#0984e3'
                        //onChangeText={(searchString) => {this.setState({searchString})}}
                        //underlineColorAndroid="transparent"
                    />
                     
                </View>
                <View style={styles.searchSection2}>
                <View style={styles.searchIcon}>

                <Icon

                raised
                name='car'
                style={{color: '#0984e3'}}
                color='#0984e3'
                /></View>
                <TextInput
                    style={styles.input}
                    placeholder="Vehicle Registration Id"
                    
                    secureTextEntry={true}
                    placeholderTextColor ='#0984e3'
                    //onChangeText={(searchString) => {this.setState({searchString})}}
                    //underlineColorAndroid="transparent"
                />
                <View style={{}}>
                <Button transparent>
                    <Icon
                        type="FontAwesome" 
                        name="eye-slash"
                        style={{color: '#0984e3'}}
                    />
                </Button>
              
                </View>
            </View>
            <View style={styles.searchSection2}>
                <View style={styles.searchIcon}>
                <Icon

                raised
                name='key'
                style={{color: '#0984e3'}}
                color='#0984e3'
                /></View>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    
                    secureTextEntry={true}
                    placeholderTextColor ='#0984e3'
                    //onChangeText={(searchString) => {this.setState({searchString})}}
                    //underlineColorAndroid="transparent"
                />
                <View style={{}}>
                <Button transparent>
                    <Icon
                        type="FontAwesome" 
                        name="eye-slash"
                        style={{color: '#0984e3'}}
                    />
                </Button>
              
                </View>
                
            </View>
            <Button style={styles.button} transparent><Text style={styles.buttonTitle}>Login</Text></Button>
            <View style={styles.bottom}>
                <View style={{flexWrap: 'wrap'}}>
                <TouchableOpacity>
                    <Text style={styles.bottomText}>Password forgotten?</Text>
                </TouchableOpacity>
                </View>
                <View style={{borderRightColor: "#0984e3",borderRightWidth: 1, marginRight: 10, marginLeft: 10,}}></View>
                <View style={{flexWrap: 'wrap',}}>
                <TouchableOpacity onPress={Actions.newaccount}>
                    <Text style={styles.bottomText}>Create an account</Text>
                </TouchableOpacity>
                </View>
               
            </View>
            </KeyboardAvoidingView>
            
        </View>
    );
  }
}      

// define your styles

const styles = StyleSheet.create({
    bgdContainer: {
        width: null,
        
        backgroundColor: 'rgba(9, 132, 227, 0.3)'
    },
    icon:{
        color: '#fff',
    },
    text:{
        color: '#fff',
        fontSize: 18,
    },
    hearderContainer:{
        backgroundColor: '#0984e3',
    },
    firstContainer:{
        height: Dimensions.get('window').height,
        //
        //margin: Dimensions.get('window').height,
        backgroundColor: "#fff",
    },
    usericon:{
        marginBottom: 30,
        width: 100,
        height: 100,
    },
    logoContainer:{
        marginTop: 20,
        alignItems: 'center',
    },
    input:{
        marginTop: 20,
        width: 300,
        height: 40,
        backgroundColor: 'rgba(9, 132, 227, 0.5)',
        borderRadius: 50,
        flexDirection: 'row',
    },
    inputContainer:{
        alignItems: 'center',
    },
    formContainer:{

    },
    input:{
        height: 30,
        width: 200,
        borderBottomColor: '#0984e3',
        borderWidth: 1,
    },
    searchSection: {
        //flex: 1,
        //marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
       // marginLeft: 30,
        width: 300,
        height: 40,
        borderRadius: 35,
    },
    searchSection2: {
      //flex: 1,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ccc',
      //marginLeft: 30,
      width: 300,
      height: 40,
      borderRadius: 35,
  },
    searchIcon: {
      
        paddingLeft: 15,
        //backgroundColor: '#ccc',
        
    },
    input: {
        flex: 1,
        
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        //backgroundColor: '#ccc',
        color: '#424242',
    },
    container:{
        alignItems: 'center',
    },
    button:{
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 40,
        borderWidth: 1,
        borderColor:'#0984e3',
        borderRadius: 50,
    },
    buttonTitle:{
        fontSize: 16,
        color: '#0984e3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
     
      alignItems: 'center',
        flex: 1,
   
    },
    avoidingView:{
        flex: 1,
        alignItems: 'center',
    },
    firstContainer:{
        flex: 1,
    },
    Mylogo:{
        color: '#0984e3',
        fontSize: 100,

    },
    logoContainer:{
        marginTop: 30,
        marginBottom: 20,
    },
    bottom:{
        flexDirection: 'row',
        marginTop: 20,
    },
    bottomText:{
        fontSize: 14,
        color: '#0984e3',
    }

 });

