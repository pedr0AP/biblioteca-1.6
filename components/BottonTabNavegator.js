import React,{Component} from "react";
import {NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";

const Tab=createBottomTabNavigator();

export default class BottonTabNavigator extends Component{
    render(){
        return(
            
            <NavigationContainer>
               
                <Tab.Navigator>
                    <Tab.Screen name = "Tela1" component = {Screen1}/>

                    <Tab.Screen name = "Tela2" component = {Screen2}/>
                </Tab.Navigator>

            </NavigationContainer>

        )

    }

};

