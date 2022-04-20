import React, { useContext} from 'react';
import firebase from '../services/firebaseConnection'
import {
    Alert
} from 'react-native'
import AuthContext from '../context/auth';

export default function Logando(email, senha){
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
        let user = userCredential.user   
        console.log(user)         
        Alert.alert(user)
    })      
    .catch((error) =>{
        let errorCode = error.code
        let errorMessage = error.message
    })
}