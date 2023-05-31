import React,{Component} from "react";
import {View, Text, TouchableOpacity,StyleSheet, TextInputComponent, TextInput } from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";
import db from "../config"


const styles = StyleSheet.create({
    textinput: { width: "57%", 
    height: 50, padding: 10, 
    borderColor: "#FFFFFF", 
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4", 
    fontFamily: "Rajdhani_300Light",
    color: "#FFFFFF" },

    text: { color: "#ffff", fontSize: 15 },
    button: { width: "43%", height: 55, justifyContent: "center", alignItems: "center", backgroundColor: "#F48D20", borderRadius: 15 }
})


export default class Screen1 extends Component{
   constructor(props){
    super(props);    
    
    this.state={
        bookReader: "",
        notState: "normal",
        cameraPermission: null,
        scan: false,
        data: "",
    };
    

   }
   getCameraPermissions = async notState => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);

    this.setState ({ cameraPermission: status === "granted",
                    notState: notState,
                    scan: false });
        
} ;

BarCodeScanned = async ({type, data})=>{
    this.setState({data: data,
                    notState: "normal",
                    scan: true
                });
};

        transition = ()=> {
            var {data} = this.state
            db.collection("Books")
            .doc(data).get().then(doc => {console.log(doc.data())})
        };
   
    render(){
        const{notState, cameraPermission, scan, data, bookReader} = this.state;

       if(notState === "scanner"){
            return(
                <BarCodeScanner onBarCodeScanned={scan ? undefined: this.BarCodeScanned} style ={StyleSheet.absoluteFillObject}>

            
                </BarCodeScanner>
            )

            
       }

        return (
            <View style = {{backgroundColor: "#00ffff" }}>
      <Text>
    { cameraPermission ? data: "permissão da camera"  }
      </Text>
      
        <View>
                <TextInput placeholder = {"leitura do código"} value = {bookReader} style = {styles.textinput}>

                </TextInput>
</View>
        <View>
        <TouchableOpacity style = {styles.button} onPress={()=> this.getCameraPermissions("scanner")}>
            
            <Text style = {styles.text}>
            Digitalizar QR code
            </Text>

        </TouchableOpacity>
            </View>
            
            <View>
             <TouchableOpacity style = {styles.textInput} onPress = {this.transition} >
                 
                 <Text style = {styles.text}  >
                 Enviar
                 </Text>
     
             </TouchableOpacity>
                 </View>
            </View>
        )

    }

}