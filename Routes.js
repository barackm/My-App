import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import App from './app';
import Login from './app/components/Login';
import News from './app/components/News';
import Myheader from './app/components/Myheader';
import Constants from 'expo-constants';
import Home from './app/components/Home';
import MydashBoard from './app/components/pages/sidebarPages/MydashBoard';
import Newaccount from './app/components/pages/sidebarPages/Newaccount';
import { Container } from 'native-base';
import Documentation from './app/components/pages/sidebarPages/Documentaion';
import Aboutus from './app/components/pages/sidebarPages/Aboutus';
import Blocknote from './app/components/pages/sidebarPages/Blocknote';
import Carmanagement from './app/components/pages/sidebarPages/Carmanagement';
import Motobiciclemanag from './app/components/pages/sidebarPages/Motobiciclemanag';
import Notice from './app/components/pages/sidebarPages/Notice';
import Settings from './app/components/pages/sidebarPages/Settings';
import Updates from './app/components/pages/sidebarPages/Updates';
import Discussions from './app/components/pages/Discussions';
import Camera1 from './app/components/pages/Camera1';

export default class Routes extends Component {
    render() {
        return (
            <Container style={styles.container}>
             
            <Router>
            <Stack key="root">
                <Scene key="home" component ={Home} title="Home" hideNavBar={true}/>
                <Scene key="news" component={News} title="News" hideNavBar={true}/>
                <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
                <Scene key="dashboard" component={MydashBoard} title="Dashboard" hideNavBar={true}/>
                <Scene key="newaccount" component={Newaccount} title="New Account" hideNavBar={true}/>
                <Scene key="documentation" component={Documentation} title="Documentation" hideNavBar={true}/>
                <Scene key="aboutus" component={Aboutus} title="Aboutus" hideNavBar={true}/>
                <Scene key="blocknotes" component={Blocknote} title="Blocknote" hideNavBar={true}/>
                <Scene key="carmanagement" component={Carmanagement} title="LogCarmanagementin" hideNavBar={true}/>
                <Scene key="motobiciclemanag" component={Motobiciclemanag} title="Motobiciclemanag" hideNavBar={true}/>
                <Scene key="notice" component={Notice} title="Notice" hideNavBar={true}/>
                <Scene key="settings" component={Settings} title="Settings" hideNavBar={true}/>
                <Scene key="updates" component={Updates} title="Updates" hideNavBar={true}/>
                <Scene key="discussions" component={Discussions} title="Discussions" hideNavBar={true}/>
                <Scene key="camera1" component={Camera1} title="Camera" hideNavBar={true}/>                

            </Stack>
        </Router>
        </Container>
        )
    }
}
const styles = StyleSheet.create({
   container:{
       flex: 1,
      
   } 
});