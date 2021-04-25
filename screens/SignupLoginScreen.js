import React from 'react';
import firebase from "firebase"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import db from '../config'
export default class SignupLoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:"",
            password:"",
        }
    }
    userSignup=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(()=>{
            return alert("User Added Succesfully!")
        })
        .catch(function(error){
            var errorcode=error.code
            var errormessage=error.message
            return  alert(errormessage)
        })
    }
    userLogin=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(()=>{
            return  alert("Succesfully Login!")
        })
        .catch(function(error){
            var errorcode=error.code
            var errormessage=error.message
            return alert(errormessage)
        })
    }
    render(){
        return(
            <View style={styles.container}>
               <View>
                   <Text style={styles.title}>Barter App</Text>
               </View>
               <View>
                   <TextInput
                   style={styles.loginbox}
                   placeholder="abc@example.com"
                   keyboardType="email-address"
                   onChangeText={(text)=>{
                       this.setState({
                           emailId:text
                       })
                   }}
                    />
                    <TextInput
                    style={styles.loginbox}
                    secureTextEntry={true}
                    placeholder="enter password"
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />
               </View>
               <View style={{alignItems:"center"}}>
                <TouchableOpacity style={styles.button,{marginBottom:10}} 
                onPress={()=>{this.userLogin(this.state.username,this.state.password)}}>
              <Text style={{color:"#ff5722", fontSize:18, fontStyle:"bold"}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} 
                onPress={()=>{this.userSignup(this.state.username,this.state.password)}}>
              <Text style={{color:"#fd5722", fontSize:18, fontStyle:"bold"}}>SIGN UP</Text>
                </TouchableOpacity>
               </View>
            </View>
        )
        }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00'
      },
      loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
      },
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
  });