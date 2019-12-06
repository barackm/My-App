//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

// create a component
class Mysidebar extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <ScrollView>
                <View style={styles.logoContainer}>
                    <ImageBackground source={require('../images/logo.png')} style={styles.logo}>

                    </ImageBackground>
                </View>
                <TouchableOpacity onPress={Actions.dashboard}>
                <View style={[styles.options, styles.firstOption]}>
                    
                    <Icon 
                        name="person"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>My Dashboad</Text>                 
                </View>
                </TouchableOpacity>
                <View style={styles.line}></View>

                <TouchableOpacity onPress={Actions.carmanagement}>
                <View style={styles.options}>
                    <Icon 
                        name="car"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Car management</Text>
                </View>
                </TouchableOpacity>
                <View style={styles.line}></View>

                <TouchableOpacity onPress={Actions.motobiciclemanag}>
                <View style={styles.options}>
                    <Icon 
                        name="bicycle"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Motobicycle manag.</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.line}></View>

                <TouchableOpacity onPress={Actions.blocknotes}>
                <View style={styles.options}>
                    <Icon 
                        name="bookmarks"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Block note</Text>
                </View>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity  onPress={Actions.documentation}>
                <View style={styles.options}>
                   
                    <Icon 
                        name="book"
                        style={styles.icon}
                    />
                

                    
                    <Text style={styles.text}>Documentation</Text>
                </View>
                </TouchableOpacity>
                
                <View style={styles.line}></View>
                <TouchableOpacity onPress={Actions.notice}>
                <View style={styles.options}>
                    <Icon 
                        type="FontAwesome"
                        name="exclamation-triangle"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Notice</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.line}></View>
                <TouchableOpacity >
                <View style={styles.options}>
                    <Icon 
                        name="person"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>My Profile</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.line}></View>
                <TouchableOpacity>
                <View style={styles.options}>
                    <Icon 
                        name="person"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>My Profile</Text>
                </View>
                </TouchableOpacity>

                <View style={styles.line}></View>

               
                <View style={styles.options}>
                    <TouchableOpacity onPress={Actions.settings}>
                  <View style={styles.buttom}>
                  <Icon 
                        type="FontAwesome"
                        name="cogs"
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Settings</Text>
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={Actions.updates}>
                  <View style={styles.buttom}>
                      <Icon
                      type="FontAwesome"
                      style={styles.icon} 
                        name="download"
                      />
                      <Text style={styles.text}>Updates</Text>
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={Actions.aboutus}>
                  <View style={styles.buttom}>
                  <Icon 
                        name="at"
                        style={styles.icon}
                    />
                      <Text style={styles.text}>About us</Text>
                  </View>
                  </TouchableOpacity>
                </View>
                              
                </ScrollView>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: '#fff',
    },
    logo:{
        width: 180,
        height: 180,
    },
    logoContainer:{
        backgroundColor: 'rgba(9, 132, 227, 0.7)',
        width: null,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    options:{
        marginTop: 10,
        width: null,
        height: 40,
        flexDirection: 'row',
    },
    icon:{
        marginLeft: 30,
        marginRight: 30,
        fontSize: 20,
        color: '#0984e3',

    },
    text:{
        fontWeight: 'normal',
        fontSize: 16,
        color: '#0984e3',
    },
    line:{
        width: 200,
        marginLeft: 40,
        margin: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    buttom:{
       
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 20,
    },
    firstOption:{
        marginTop: 20,
    }

});

//make this component available to the app
export default Mysidebar;