import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottonTabNavigator from './components/BottonTabNavegator';
import {Rajdhani_300Light} from '@expo-google-fonts/rajdhani';
import * as Font from 'expo-font';
import { Component } from 'react';
import { render } from 'react-dom';



export default class App extends Component {
  constructor(){
    super();
    this.state = {fontLoader: false};
  }
async loadFonts(){
  await Font.loadAsync({Rajdhani_300Light: Rajdhani_300Light});
  this.setState({fontLoader: true});
};
  componentDidMount(){
this.loadFonts();
  };

render(){
  const {fontLoader} = this.state;
  if(fontLoader){
    return (
    <BottonTabNavigator/>

    
  );
}
return null;
  
  
}
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
